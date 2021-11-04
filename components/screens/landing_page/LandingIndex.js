import React from 'react'
import { Button, Text, View } from 'react-native'
import { GridCard, ListCard, SquareCard } from '../../custom_components/customCards'

const LandingIndex = (props) => {
    const {navigation} = props
    
    return (
        <View style={{ flex: 1, flexDirection:'column' ,justifyContent: 'center', alignItems: 'center' }}>
            <SquareCard/>
            <ListCard/>
            <GridCard/>
        </View>
    )
}

export default LandingIndex
