import React from 'react'
import { Button, Text, View } from 'react-native'

const Register = (props) => {
    const {navigation} = props
    return (
        <View>
            <Text>
                Register
            </Text>
            <Button onPress={()=>navigation.navigate("Login")} title="Sign Up"/>
        </View>
    )
}

export default Register
