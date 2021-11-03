/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , {useState , useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { AsyncStorage } from '@react-native-community/async-storage'




const App = () => {

  const [firstLaunch , setFirstLaunch] = useState(false)

  useEffect(()=>{
    setFirstLaunch(true)
  },[])

  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <Text>SGCARLIST {firstLaunch} - edit</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
