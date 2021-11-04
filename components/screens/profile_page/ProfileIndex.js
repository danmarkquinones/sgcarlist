import React from 'react'
import { Button, Text, View } from 'react-native'

const ProfileIndex = (props) => {

    const {navigation} = props

    const onClick = () => {
        navigation.navigate('Login')
    }

    return (
        <View>
            <Text>
                Profile
            </Text>
            <Button title="Login" onPress={onClick}/>
        </View>
    )
}

export default ProfileIndex
