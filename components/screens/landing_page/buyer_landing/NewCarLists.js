import React , {useEffect , useState} from 'react'
import { FlatList , Text } from 'react-native'
import { SquareCard, WhiteCard } from '../../../custom_components/customCards'
import { cars } from '../../../contants/dummyCarData';
import { fetchCars } from '../../../store/api_calls/cars_api';
import { SkeletonSquareCard } from '../../../custom_components/customCardLoaders';
import { FetchFailed } from '../../../custom_components/customFallbacks';

const NewCarLists = (props) => {

    const {navigation , handleSeeMore} = props

    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getCars = fetchCars()
        getCars.then((res)=>{
            if(res.data){
                setData(cars)
                setIsLoading(false)
            }
        }).catch((e)=>{
            setIsLoading(false)
        })
    }, [])

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
                    // Icon={()=><Entypo name='new' size={20} solid color={theme.tertiaryBlue}/>}
                />
                :<WhiteCard onPress={()=>handleSeeMore('FilterIndex' , 'newcars')} options={{width:150}}/>
            )}
        />
    )
}

export default NewCarLists
