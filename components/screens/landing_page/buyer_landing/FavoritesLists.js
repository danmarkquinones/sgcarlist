import React , {useEffect , useState} from 'react'
import { FlatList , Text , View} from 'react-native'
import { SquareCard, WhiteCard } from '../../../custom_components/customCards'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../../contants/colors';
import { cars } from '../../../contants/dummyCarData';
import { fetchCars } from '../../../store/api_calls/cars_api';
import { SkeletonSquareCard } from '../../../custom_components/customCardLoaders';
import { FetchFailed } from '../../../custom_components/customFallbacks';

const FavoritesLists = (props) => {

    const {navigation , handleSeeMore , refreshing} = props 

    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const fetchData = () => {
        setIsLoading(true)
        console.log('call api')
        const getCars = fetchCars()
        getCars.then((res)=>{
            console.log('call success' , res)
            if(res.data){
                setData(cars)
                setIsLoading(false)
            }
        }).catch((e)=>{
            console.log('call failed' , e)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(refreshing){
            fetchData()
        }
    }, [refreshing])

    return (
        isLoading?
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[...Array(3)]}
                keyExtractor={(item,index)=>index}
                renderItem={({item})=>
                    <SkeletonSquareCard width={150} height={150} borderRadius={5} marginLeft={10}/>
                }
            />
        :!isLoading&&data.length===0?
            <FetchFailed message="There seems to be a problem getting your request, please try again later"/>
        :<FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item , index})=>(
                index!==3 ?
                <SquareCard
                    onPress={()=>navigation.navigate('ProductView', item)}
                    car={item} 
                    Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}
                />
                :<WhiteCard onPress={()=>handleSeeMore('FavoriteStacks')} options={{width:150}}/>
            )}
        />
    )
}

export default FavoritesLists