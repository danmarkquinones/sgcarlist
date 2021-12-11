import React , {useEffect , useState} from 'react'
import { FlatList , View , Text, TouchableOpacity } from 'react-native'
import { SquareCard, WhiteCard } from '../../../custom_components/customCards'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../../contants/colors';
import { Divider } from 'react-native-elements';
import { landingStyles } from '../../../styles/landingStyles';
import { fetchLandingPageLists } from '../../../store/api_calls/cars_api';

const TopLocations = (props) => {

    const {navigation , refreshing} = props
    const [locations , setLocations] = useState([])

    const [isLoading , setIsLoading] = useState(false)

    const fetchData = () => {
        setIsLoading(true)
        const getLocations = fetchLandingPageLists('top-search-location')
        getLocations.then((res)=>{
            if(res.data){
                console.log('locations' , res.data)
                const displayLocations = res.data.data
                setLocations(displayLocations)
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
        <View>
            {isLoading?
                <Text>Loading...</Text>
            :!isLoading&&locations.length===0?
                <Text>Problem</Text>
            :<FlatList
                data={locations}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item , index})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('SearchResult' , 'toplocation')}>
                        <View style={landingStyles.locationItemContainer}>
                            <Text style={landingStyles.locationText}>
                                {index+1}. {item.name}
                            </Text>
                            <Divider/>
                        </View>
                    </TouchableOpacity>
                )}
            />
            }
        </View>
        
    )
}

export default TopLocations
