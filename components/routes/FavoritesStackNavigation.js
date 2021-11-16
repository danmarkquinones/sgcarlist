import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesIndex from '../screens/favorites_page/FavoritesIndex';
import FilterIndex from '../screens/filter_page/FilterIndex';
import ProductView from '../screens/landing_page/product_view/ProductView';

const Stack = createNativeStackNavigator();

export const FavoritesStackNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Favorites">
        <Stack.Screen name="Favorites" component={FavoritesIndex} />
        <Stack.Screen name="SearchResult" component={FilterIndex} />
        <Stack.Screen name="ProductView" component={ProductView} />
      </Stack.Navigator>
    );
}