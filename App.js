import React , {useState , useEffect} from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationIndex from './components/routes/NavigationIndex';
import AsyncStorage from '@react-native-async-storage/async-storage';



const App = () => {
  // transfer to redux
  const getData = async (type , value) => {
    try {
      const data = await AsyncStorage.getItem(type)
      console.log(type,data)
      if(data === null) {
        AsyncStorage.setItem(type , value.toString()) 
      }
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=>{
    getData('isLaunched' , 0)
    getData('isNotify' , 0)
    getData('isSellMode' , 0)
    getData('isLoggedIn' , 0)

    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  },[])

  return (
    <SafeAreaProvider>
      <NavigationIndex/>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
