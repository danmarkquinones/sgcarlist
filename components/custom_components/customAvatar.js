import React from 'react'
import { View , Text} from 'react-native'
import { theme } from '../contants/colors'

const CustomAvatar = (props) => {
    const {initial , color , size}  = props
    return (
        <View
            style={{
                backgroundColor:color,
                height:size,
                width:size,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:50
            }}
        >
            <Text
                style={{
                    color:theme.white,
                    fontWeight:'bold',
                    fontSize:size*0.4
                }}
            >
                {initial}
            </Text>
        </View>
    )
}

export default CustomAvatar
