import React , {useEffect , useState} from 'react'
import { FlatList , View , Text, TouchableOpacity } from 'react-native'
import { SquareCard, WhiteCard } from '../../../custom_components/customCards'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../../contants/colors';
import { Divider } from 'react-native-elements';
import { landingStyles } from '../../../styles/landingStyles';
import { locations } from '../../../contants/dummyCarData';

const TopLocations = (props) => {

    const {navigation} = props
    const [sample , setSample] = useState([])

    // useEffect(() => {

    //     const users = fetchUser()

    //     users.then((res)=>
    //         setSample(res.data)
    //     ).catch((e)=>console.log(e))
    // }, [])

    return (
        <FlatList
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
    )
}

export default TopLocations
