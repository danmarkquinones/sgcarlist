import React from 'react'
import { View , TextInput } from 'react-native'
import { theme } from '../contants/colors'

const PrimaryInput = ({
    placeholder,
    onChange,
    value,
    borderColor,
    Icon,
    editable
}) => {
    return (
        <View
            style={{
                backgroundColor:theme.white,
                borderRadius:5,
                borderColor:theme.gray,
                borderWidth:1,
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                paddingHorizontal:10
            }}
        >
            <TextInput
                style={{
                    height:40,
                    fontSize:15
                }}
                editable={editable}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <Icon/>
        </View>
    )
}

export default PrimaryInput