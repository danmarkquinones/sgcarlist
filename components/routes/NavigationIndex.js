import React, {useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingIndex from '../screens/onboarding_page/OnboardingIndex';
import Login from '../screens/auth_page/Login';
import Register from '../screens/auth_page/Register';
import { LandingStackNavigation } from './LandingStackNavigation';
import { FavoritesStackNavigation } from './FavoritesStackNavigation';
import { ProfileStackNavigation } from './ProfileStackNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = () => {
    const [firstLaunch , setFirstLaunch] = useState(true)

    // Add AsyncStorage Logic for onboarding first launch here

    return(
        <Stack.Navigator initialRouteName={firstLaunch?"Onboarding":"TabNav"}>
            <Stack.Screen name="Onboarding" component={OnboardingIndex} options={{headerShown:false}}/>
            <Stack.Screen name="TabNav" component={AppTabNavigation} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

const AppTabNavigation = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="LandingStacks" component={LandingStackNavigation} options={{headerShown:false}}/>
            <Tab.Screen name="FavoriteStacks" component={FavoritesStackNavigation} options={{headerShown:false}}/>
            <Tab.Screen name="ProfileStacks" component={ProfileStackNavigation} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

const NavigationIndex = () => {
    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    )
}

export default NavigationIndex
