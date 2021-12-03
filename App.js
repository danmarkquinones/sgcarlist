import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationIndex from './components/routes/NavigationIndex';
import { UserConfigContextProvider } from './components/store/context_api/userContext';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  return (
    <SafeAreaProvider>
      <UserConfigContextProvider>
        <NavigationIndex/>
      </UserConfigContextProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
