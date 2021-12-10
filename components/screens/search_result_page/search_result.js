import React, {useState , useEffect , useContext} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../custom_components/customHeader';
import SorterComponent from '../../reusable_components/sorterComponent';
import {cars, pinnedFilters} from '../../contants/dummyCarData';
import {theme} from '../../contants/colors';
import {
  GridCard,
  ListCard,
  PinnedFilterCard,
} from '../../custom_components/customCards';
import {SimpleFallback} from '../../custom_components/customFallbacks';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FilterConfigContext } from '../../store/context_api/filterContext';
import { fetchFilterResults } from '../../store/api_calls/cars_api';
import { SkeletonListCard } from '../../custom_components/customCardLoaders';

const SearchResult = ({navigation}) => {
  const [config, setConfig] = useState({
    sortBy: 'ascending',
    isGridView: false,
    savedCars: cars,
    pinnedFilters: pinnedFilters,
  });


  const [filters , setFilters] = useContext(FilterConfigContext)
  const [results , setResults] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  const fetchData = () => {
    setIsLoading(true)
    const getCars = fetchFilterResults(filters)
    getCars.then((res)=>{
        if(res.data){
            const displayCars = res.data.data
            console.log('response' , res.data)
            setResults(displayCars)
            setIsLoading(false)
        }
    }).catch((e)=>{
        console.log('call failed in results' , e)
        setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const goToProduct = item => {
    navigation.navigate('ProductView', item);
  };

  return (
    <View>
      <CustomHeader title="Search Results" />
      <SorterComponent config={config} setConfig={setConfig} />
      <ScrollView style={{backgroundColor: theme.lightBlue}}>
        {/* <Text>BANNER HERE</Text> */}
        <Text
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 20,
            paddingVertical: 24,
            fontSize: 16,
          }}
        >
          {
            isLoading? 'Searching your car preference...Plase wait.' 
            :!isLoading&&results.length===0?''
            :`Great! we found ${results.length} cars from your preference.`
          }
        </Text>
        <View>
          {isLoading? 
            <FlatList
                data={[...Array(8)]}
                keyExtractor={(item,index)=>index}
                renderItem={({item})=>
                    <SkeletonListCard width={500} height={100} borderRadius={5} margin={5}/>
                }
            />
            :!isLoading&&results.length===0?
                <View style={{paddingHorizontal:50}}>
                  <SimpleFallback message='No cars found on that query, Kindy change your filter.'/>
                </View>
            :<FlatList
              data={results}
              key={config.isGridView}
              contentContainerStyle={{
                alignItems: config.isGridView ? 'flex-start' : 'center',
                justifyContent: 'space-between',
                paddingBottom: 150,
              }}
              numColumns={config.isGridView ? 2 : 1} // set number of columns
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => goToProduct(item)}>
                  {config.isGridView ? (
                    <GridCard car={item}/>
                  ) : (
                    <ListCard car={item}/>
                  )}
                </TouchableOpacity>
              )}
            />
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchResult;
