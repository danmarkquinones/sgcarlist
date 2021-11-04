import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileIndex from '../screens/profile_page/ProfileIndex';

// Edit HEADERS of Stack Navigators under Landing Page

const Stack = createNativeStackNavigator();

export const ProfileStackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={ProfileIndex}/>
        </Stack.Navigator>
    )
}