import React from 'react'
import {View , Text, Button} from 'react-native'

const OnboardingIndex = (props) => {
    const {navigation} = props

    const onClick = () => {
        navigation.navigate("TabNav")
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Onboarding</Text>
            <Button title="Get STARTED" onPress={onClick}/>
        </View>
    )
}

export default OnboardingIndex
