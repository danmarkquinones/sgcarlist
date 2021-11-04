import React from 'react'
import { Button, Text, View } from 'react-native'

const Login = (props) => {
    const {navigation} = props
    return (
        <View>
            <Text>
                LOGIN
            </Text>
            <Button onPress={()=>navigation.navigate("LandingStacks")} title="LOGIN"/>
            <Button onPress={()=>navigation.navigate("Register")} title="Sign Up"/>
        </View>
    )
}

export default Login
