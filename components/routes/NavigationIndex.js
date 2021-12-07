import React, {useState , useEffect, useContext} from 'react'
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnboardingIndex from '../screens/onboarding_page/OnboardingIndex';
import Login from '../screens/auth_page/Login';
import Register from '../screens/auth_page/Register';
import {LandingStackNavigation} from './LandingStackNavigation';
import {FavoritesStackNavigation} from './FavoritesStackNavigation';
import {ProfileStackNavigation} from './ProfileStackNavigation';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FAIcon5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../contants/colors';
import LoaderScreen from '../reusable_components/loaderScreen';
import {UserConfigContext} from '../store/context_api/userContext';
import ResetPassword from '../screens/reset_password_page/reset_password';
import Verification from '../screens/verification_page/verification';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = () => {
  const [userConfig] = useContext(UserConfigContext);
  const [isFirstLaunched, setIsFirstLaunched] = useState(null);

  useEffect(() => {
    getIsFirstLaunched();
  }, []);

  const getIsFirstLaunched = async () => {
    const value = await AsyncStorage.getItem('isLaunched');
    if (value) {
      setIsFirstLaunched(value);
    } else {
      setIsFirstLaunched('0');
    }
  };

  if (isFirstLaunched === null) return <></>;

  return (
    <Stack.Navigator
      initialRouteName={isFirstLaunched !== '0' ? 'TabNav' : 'Onboarding'}
      // initialRouteName="TabNav"
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingIndex}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNav"
        component={AppTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoaderScreen"
        component={LoaderScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


const AppTabNavigation = () => {

    const [userConfig] = useContext(UserConfigContext)

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
                        <Text style={{color:color }}>{userConfig.isSellMode===0?'Explore':'Post Ad'}</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        userConfig.isSellMode===0?
                            <AntIcon name="search1" color={color} size={25}  />
                            :<FAIcon5 name="buysellads" color={color} size={25}/>
                    ),
                }}/>
            <Tab.Screen 
                name="FavoriteStacks" 
                component={FavoritesStackNavigation} 
                options={{
                    headerShown:false,
                    tabBarLabel: ({ color })=>(
                        <Text style={{color:color }}>{userConfig.isSellMode===0?"Favorites":"My Ads"}</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        userConfig.isSellMode===0?
                            <AntIcon name="staro" color={color} size={25} />
                            :<FAIcon5 name="car" color={color} size={25}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="ProfileStacks" 
                component={ProfileStackNavigation}
                options={() => ({
                    headerShown:false,
                    tabBarLabel: ({ color })=>(
                        <Text style={{color:color }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        userConfig.isSellMode===0?
                            <AntIcon name="user" color={color} size={25} />
                            :<FAIcon name="user-circle" color={color} size={25}/>
                    )
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
