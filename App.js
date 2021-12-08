import React , {useEffect} from 'react';
import { StyleSheet , View , Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationIndex from './components/routes/NavigationIndex';
import { UserConfigContextProvider } from './components/store/context_api/userContext';
import { FilterConfigContextProvider } from './components/store/context_api/filterContext';
import { ToastProvider } from 'react-native-toast-notifications'
import SplashScreen from 'react-native-splash-screen'
import FeatherIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { theme } from './components/contants/colors';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <SafeAreaProvider>
      <FilterConfigContextProvider>
        <UserConfigContextProvider>
          <ToastProvider
            duration={1000}
            successIcon={<FeatherIcon name='check-circle' size={20} color={theme.white}/>}
            dangerIcon={<MatIcon name='error-outline' size={20} color={theme.white}/>}
            textStyle={{ fontSize: 16 }}
          >
            <NavigationIndex/>
          </ToastProvider>
        </UserConfigContextProvider>
      </FilterConfigContextProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
