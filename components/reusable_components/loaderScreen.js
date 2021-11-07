import React , {useEffect} from 'react'
import { View , Text} from 'react-native'
import { useIsFocused } from '@react-navigation/core';

const LoaderScreen = (props) => {

    const {navigation} = props

    const isFocused = useIsFocused()

    useEffect(()=>{
        if(isFocused){
            // if(from==='sellSwitch'){

            // }
            setTimeout(()=>{
                navigation.navigate('TabNav')
            },3000)
        }
    },[isFocused])

    return (
        <View>
            <Text>LOADER</Text>
        </View>
    )
}

export default LoaderScreen
