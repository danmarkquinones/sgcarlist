import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingIndex from '../screens/landing_page/LandingIndex';
import ProductView from '../screens/landing_page/product_view/ProductView';

const Stack = createNativeStackNavigator();

export const LandingStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="LandingIndex">
            <Stack.Screen name="LandingIndex" component={LandingIndex}/>
            <Stack.Screen name="ProductView" component={ProductView}/>
        </Stack.Navigator>
    )
}