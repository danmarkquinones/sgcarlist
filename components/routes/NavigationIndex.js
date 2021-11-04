import React, {useState , useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingIndex from '../screens/landing_page/LandingIndex';
import OnboardingIndex from '../screens/onboarding_page/OnboardingIndex';

const Stack = createNativeStackNavigator();

const NavigationIndex = () => {
    const [firstLaunch , setFirstLaunch] = useState(true)
    // useEffect(() =>{
    //     AsyncStorage.getItem("alreadyLaunched").then(value=>{
    //     if(!value){
    //         AsyncStorage.setItem("alreadyLaunched" , 'true');
    //         setFirstLaunch(true)
    //     }else{
    //         setFirstLaunch(false)
    //     }
    //     })
    // },[])

    console.log(firstLaunch)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Landing" component={LandingIndex}/>
                <Stack.Screen name="Onboarding" component={OnboardingIndex}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationIndex
