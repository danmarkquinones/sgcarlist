import React from 'react'
import { View , Text} from 'react-native'
import CustomHeader from '../../../custom_components/CustomHeader'

const ProductView = (props) => {

    const {navigation , route} = props
    const item = route.params

    return (
        <View>
            <CustomHeader title={item.name}/>
            <Text>{item.name}</Text>
        </View>
    )
}

export default ProductView
