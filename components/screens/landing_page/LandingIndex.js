import React from 'react'
import { Button, Text, View } from 'react-native'
import { GridCard, ListCard, SquareCard } from '../../custom_components/customCards'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../contants/colors';

const LandingIndex = (props) => {
    const {navigation} = props

    const item = {
        id:'',
        name:'SUC High Speed V446',
        price:'1,499 USD',
        location:'Jurong , Singapore',
        url:''
    }
    
    return (
        <View style={{ flex: 1, flexDirection:'column' ,justifyContent: 'center', alignItems: 'center' }}>
            <SquareCard car={item} Icon={()=><FontAwesome5 name='hotjar' size={20} solid color={theme.red}/>}/>
            <ListCard car={item} Icon={()=><FontAwesome5 name='star' size={20} solid color={theme.yellow}/>}/>
            <GridCard car={item} Icon={()=><FontAwesome5 name='check-circle' size={20} solid color={theme.green}/>}/>
        </View>
    )
}

export default LandingIndex
