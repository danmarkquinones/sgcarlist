import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingIndex from '../screens/landing_page/LandingIndex';
import ProductView from '../screens/landing_page/product_view/ProductView';
import FilterIndex from '../screens/filter_page/FilterIndex';

const Stack = createNativeStackNavigator();

export const LandingStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LandingIndex">
      <Stack.Screen name="LandingIndex" component={LandingIndex} />
      <Stack.Screen name="ProductView" component={ProductView} />
      <Stack.Screen name="FilterIndex" component={FilterIndex} />
    </Stack.Navigator>
  );
};