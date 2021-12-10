import React , {useState , useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import { getAsyncStorageData } from '../api_calls/user_api';

export const UserConfigContext = React.createContext();

export const UserConfigContextProvider = (props) => {

    const [userConfig , setUserConfig] = useState({
        isLaunched : 0,
        isLoggedIn : 0,
        isSellMode : 0,
        isNotificationOn : 0,
        language:'en',
        userDetails : {},
    });
    
    useEffect(()=>{
        const userInfo = getAsyncStorageData('userDetails' , '{}')
        userInfo.then((data)=>{
            if(data){
                setUserConfig({...userConfig ,isLoggedIn:1,  userDetails:JSON.parse(data)})
            }else{
                setUserConfig({...userConfig ,isLoggedIn:0,  userDetails:{}})
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
