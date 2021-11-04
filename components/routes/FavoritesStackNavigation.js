import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesIndex from '../screens/favorites_page/FavoritesIndex';

const Stack = createNativeStackNavigator();

export const FavoritesStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Favorites">
            <Stack.Screen name="Favorites" component={FavoritesIndex}/>
        </Stack.Navigator>
    )
}