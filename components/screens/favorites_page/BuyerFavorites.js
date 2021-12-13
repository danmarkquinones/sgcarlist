import React , {useState , useEffect, useContext} from 'react';
import { View, StyleSheet, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import CustomHeader from '../../custom_components/customHeader';
import {theme} from '../../contants/colors';
import SorterComponent from '../../reusable_components/sorterComponent';
import { cars, pinnedFilters } from '../../contants/dummyCarData';
import { GridCard , ListCard, PinnedFilterCard } from '../../custom_components/customCards';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SimpleFallback } from '../../custom_components/customFallbacks';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { removePinnedFilter, removeToSavedCars } from '../../store/helpers/globalFunctions';
import { SkeletonListCard } from '../../custom_components/customCardLoaders';
import { FilterConfigContext } from '../../store/context_api/filterContext';

const SavedCars = ({config , setConfig , navigation}) => {

    const [favoriteCars , setFavoriteCars] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const isFocused = useIsFocused()
    const [sortBy,setSortBy] = useState({
        sort:"asc-price",
        height:120,
        options:[
            {value:"asc-price" , label:"Price - Lowest"},
            {value:"desc-price" , label:"Price - Highest"},
            // {value:"asc-date-posted" , label:"Date - Newest"},
            // {value:"desc-date-posted" , label:"Date - Oldest"},
            // {value:"relevancy" , label:"By Relevance"},
        ]
    })

    useEffect(() => {
        getSavedCars()
    }, [])

    useEffect(() => {
        if(isFocused){
            getSavedCars()
        }
    }, [isFocused])

    const getSavedCars = async () => {
        setIsLoading(true)
        try {
          const data = await AsyncStorage.getItem('savedCars')
          if(data){
            setFavoriteCars(JSON.parse(data))
            setIsLoading(false)
          }
        } catch(e) {
          console.log(e)
        }
    }

    const removeToFavorite=(item)=>{
        const filteredData = favoriteCars.filter(el=>el._id!==item._id)
        setFavoriteCars(filteredData)
        removeToSavedCars(item)
    }

    const goToProduct=(item)=>{
        navigation.navigate('ProductView', item)
    }

    const onChange = (value) => {
        // console.log('sort value : ' ,value)
        setSortBy({...sortBy,sort:value})
    }

    return(
        <View style={styles.scene} >

                <SorterComponent sortBy={sortBy} setSortBy={setSortBy} config={config} setConfig={setConfig} onChange={onChange}/>

                <View style={styles.sceneList}>
                    {isLoading? 
                        <FlatList
                            data={[...Array(3)]}
                            keyExtractor={(item,index)=>index}
                            renderItem={({item})=>
                                <SkeletonListCard width={500} height={100} borderRadius={5} margin={5}/>
                            }
                        />
                    :!isLoading&&favoriteCars?.length===0?
                        <SimpleFallback message='No saved car.'/>
                    :<FlatList
                        data={favoriteCars}
                        key={config.isGridView}
                        contentContainerStyle={{ 
                            alignItems: config.isGridView ?'flex-start':'center' , 
                            justifyContent: 'space-between', 
                            paddingBottom:100
                        }}
                        numColumns={config.isGridView ? 2 : 1}                  // set number of columns 
                        keyExtractor={item=>item._id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item , index})=>(
                            <TouchableOpacity onPress={()=>goToProduct(item)}>
                            {config.isGridView?
                                <GridCard 
                                    car={item} 
                                    Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                                    inFavorites={true}
                                    onPress={()=>removeToFavorite(item)}
                                />
                                :<ListCard 
                                    car={item} 
                                    Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                                    inFavorites={true}
                                    onPress={()=>removeToFavorite(item)} 
                                />
                            }
                            </TouchableOpacity>
                        )}
                    />
                    }
                    
                </View>
        </View>
    )
};

const PinnedFilters = ({config , setConfig , navigation}) => {

    const [pinnedFilters , setPinnedFilters] = useState([])
    const [isLoading , setIsLoading] = useState([])
    const [filters , setFilters] = useContext(FilterConfigContext)
    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused){
            getPinnedFilters()
        }
        console.log('filters',pinnedFilters) 
    }, [isFocused])

    const goToSearchResult = (data) => {
        setFilters(data)
        navigation.navigate('SearchResult')
    }

    const getPinnedFilters = async () => {
        setIsLoading(true)
        try {
          const data = await AsyncStorage.getItem('pinnedFilters')
          if(data){
            setPinnedFilters(JSON.parse(data))
            setIsLoading(false)
          }
        } catch(e) {
          console.log(e)
        }
    }

    const unPin = (data) => {
        setPinnedFilters(pinnedFilters.filter(el=>el.id!==data.id))
        removePinnedFilter(data)
    }

    return(
        <View style={[{...styles.scene},{backgroundColor:theme.white}]} >
            <View style={styles.sceneList}>
                {isLoading?
                    <FlatList
                        data={[...Array(3)]}
                        keyExtractor={(item,index)=>index}
                        renderItem={({item})=>
                            <SkeletonListCard width={500} height={100} borderRadius={5} margin={5}/>
                        }
                    />
                :!isLoading&&pinnedFilters.length===0?
                    <SimpleFallback message='No Pinned Filter'/>
                :<FlatList
                        data={pinnedFilters}
                        keyExtractor={item=>item.id}
                        renderItem={({item , index})=>(
                            <PinnedFilterCard
                                index={index}
                                filter={item}
                                onPress={()=>goToSearchResult(item)}
                                onUnpin={()=>unPin(item)}
                            />
                        )}
                    />
                }
            </View>
        </View>
    )
};

const initialLayout = { width: Dimensions.get('window').width };


const BuyerFavorites = (props) => {

    const {navigation} = props

    const [index, setIndex] = useState(0);

    const [config , setConfig] = useState({
        sortBy:'ascending',
        isGridView:true,
        savedCars:cars,
        pinnedFilters:pinnedFilters
    })

    const [routes] = React.useState([
        { key: 'first', title: 'Saved Cars' },
        { key: 'second', title: 'Pinned Filters' },
    ]);


    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <SavedCars config={config} setConfig={setConfig} {...props}/>; // passing data as data prop
          case 'second':
            return <PinnedFilters config={config} setConfig={setConfig} {...props}/>; 
          default:
            return null;
        }
    };

    return (
        <View style={{flex:1}}>
            <CustomHeader title="Favorites"/>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={(props) => (
                    <TabBar 
                        {...props} 
                        style={{backgroundColor: theme.white}}
                        renderLabel={({ focused, route }) => {
                            return (
                                <Text
                                    style={{
                                        fontWeight:'500',
                                        color:focused?theme.primaryBlue:theme.black
                                    }}
                                >
                                    {route.title}
                                </Text>
                            );
                          }}
                        indicatorStyle={{backgroundColor:theme.primaryBlue}}
                    />
                )}
                
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={styles.container}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:theme.lightBlue
  },
  scene: {
    flex: 1,
  },
  sceneList:{
    //   padding:20
  }
});


export default BuyerFavorites;