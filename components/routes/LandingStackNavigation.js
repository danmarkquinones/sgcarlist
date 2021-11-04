import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingIndex from '../screens/landing_page/LandingIndex';

const Stack = createNativeStackNavigator();

export const LandingStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="LandingIndex">
            <Stack.Screen name="LandingIndex" component={LandingIndex}/>
        </Stack.Navigator>
    )
}