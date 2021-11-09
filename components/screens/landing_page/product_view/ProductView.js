import React from 'react'
import { View , Text} from 'react-native'

const ProductView = (props) => {

    const {navigation , route} = props
    const item = route.params

    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default ProductView
