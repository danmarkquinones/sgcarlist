import React , {useState , useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { theme } from './components/contants/colors';
import NavigationIndex from './components/routes/NavigationIndex';




const App = () => {
  return (
    <NavigationIndex/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
