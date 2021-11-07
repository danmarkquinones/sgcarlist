import React, {useState , useEffect} from 'react'
import { Text } from 'react-native';
import { NavigationContainer , getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingIndex from '../screens/onboarding_page/OnboardingIndex';
import Login from '../screens/auth_page/Login';
import Register from '../screens/auth_page/Register';
import { LandingStackNavigation } from './LandingStackNavigation';
import { FavoritesStackNavigation } from './FavoritesStackNavigation';
import { ProfileStackNavigation } from './ProfileStackNavigation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { theme } from '../contants/colors';
import LoaderScreen from '../reusable_components/loaderScreen';

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
            <Stack.Screen name="LoaderScreen" component={LoaderScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

const AppTabNavigation = () => {
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.primaryBlue,
            }}
        >
            <Tab.Screen 
                name="LandingStacks" 
                component={LandingStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarLabel: ({ color })=>(
                        <Text style={{color:color }}>Explore</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <AntIcon name="search1" color={color} size={25} />
                    ),
                }}/>
            <Tab.Screen 
                name="FavoriteStacks" 
                component={FavoritesStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarLabel: ({ color })=>(
                        <Text style={{color:color }}>Favorites</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <AntIcon name="staro" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen 
                name="ProfileStacks" 
                component={ProfileStackNavigation}
                options={({ route }) => ({
                    headerShown:false,
                    tabBarLabel: ({ color })=>(
                        <Text style={{color:color }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <AntIcon name="user" color={color} size={25} />
                    ),
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                        console.log(routeName)
                        if (routeName === "Help" || routeName === "TOS") {
                            return false
                        }
            
                        return true
                    })(route),
                })}
            />
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
