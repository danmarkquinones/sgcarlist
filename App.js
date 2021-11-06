import React , {useState , useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationIndex from './components/routes/NavigationIndex';




const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationIndex/>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
