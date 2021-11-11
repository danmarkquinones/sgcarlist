import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingIndex from '../screens/landing_page/LandingIndex';
import ProductView from '../screens/landing_page/product_view/ProductView';

const Stack = createNativeStackNavigator();

export const LandingStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="LandingIndex">
            <Stack.Screen name="LandingIndex" component={LandingIndex} options={{headerShown:false}}/>
            <Stack.Screen name="SearchFilter" component={}/>
            <Stack.Screen name="ProductView" component={ProductView} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}