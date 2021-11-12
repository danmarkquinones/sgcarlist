import React , {useState , useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';

export const UserConfigContext = React.createContext();

export const UserConfigContextProvider = (props) => {

    const [userConfig , setUserConfig] = useState({
        isLaunched : 0,
        isLoggedIn : 0,
        isSellMode : 0,
        isNotificationOn : 0,
        language:'English',
        userDetails : {}
    });

    const getData = async (type , value) => {
        try {
          const data = await AsyncStorage.getItem(type)
          if(data === null) {
            AsyncStorage.setItem(type , value.toString()) 
          }
          return data
        } catch(e) {
          console.log(e)
        }
    }
    
    useEffect(()=>{
        getData('isLaunched' , 1)
        getData('isNotificationOn' , 1)
        getData('isSellMode' , 0)
        getData('isLoggedIn' , 0)

        setUserConfig({
            ...userConfig,
            isLaunched:1,
            isLoggedIn:1,
            isSellMode:0,
            isNotificationOn:1,
            language:'English',
            userDetails:{
                username:"LoremIpsum123",
                email:'Loremipusm@gmail.com',
                fname:'Lorem',
                lname:'Ipsum',
                contact:'0912 345 6789'
            }
        })
        
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    },[])

    return (
        <UserConfigContext.Provider value={[userConfig , setUserConfig]}>
            {props.children}
        </UserConfigContext.Provider>
    )
}
