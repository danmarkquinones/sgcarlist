import React , {useState} from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Divider, Overlay } from 'react-native-elements'
import { profileStyles } from '../../styles/profileStyles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../contants/colors';
import { globalStyles } from '../../styles/globalStyles';
import { PrimaryButton } from '../../custom_components/customButtons';
import { Switch } from 'react-native-elements/dist/switch/switch';
import SwitchSelector from "react-native-switch-selector";
import NotificationModal from '../../reusable_components/notificationModal';
import ConfirmationMessage from '../../reusable_components/confirmationMessage';

const ProfileIndex = (props) => {

    const {navigation} = props
    // should be store in local storage
    const [isNotifEnabled, setIsNotifEnabled] = useState(false);
    const [isSellMode,setIsSellMode] = useState(0)
    //overlays
    const [NotifOverlayVisible, setNotifOverlayVisible] = useState(false);
    const [confirmationOverlay , setConfirmationOverlay] = useState(false)

    const [information , setInformation] = useState([
        {type:'Username' , text:'LoremIpsum123'},
        {type:'Email' , text:'Loremipusm@gmail.com'},
        {type:'Full Name' , text:'Lorem Ipsum'},
        {type:'Mobile Number' , text:'0912 345 6789'}
    ])

    const options = [
        { label: "Buy", value: "0" },
        { label: "Sell", value: "1" },
    ];

    const onClick = () => {
        navigation.navigate('Login')
    };

    const toggleNotifOverlay = () => {
        setNotifOverlayVisible(!NotifOverlayVisible);
    };
    const toggleConfirmOverlay = () => {
        setIsSellMode(isSellMode)
        setConfirmationOverlay(!confirmationOverlay);
    };

    const toggleSwitchNotif = () => {
        if(isNotifEnabled){
            setIsNotifEnabled(false)
        }else{
            toggleNotifOverlay()
        }
    };


    const onConfirmNotif = () => {
        setIsNotifEnabled(true)
        toggleNotifOverlay()
    }

    const onCancelNotif = () => {
        toggleNotifOverlay()
    }

    const onConfirm = () => {
        if(isSellMode===0){
            setIsSellMode(1)
        }else{
            setIsSellMode(0)
        }
        toggleConfirmOverlay()
    }

    const onCancel = () => {
        toggleConfirmOverlay()
    }

    console.log(isSellMode, 'sell mode')

    return (
        <ScrollView>
            <View
                style={globalStyles.container}
            >
                <View
                    style={profileStyles.headerContainer}
                >
                    <Avatar rounded title="MD" />
                    <Text style={profileStyles.headerName}>Lorem Ipsum</Text>
                </View>

                <View
                    style={profileStyles.infoContainer}
                >
                    <View style={profileStyles.infoHead}>
                        <Text style={profileStyles.infoHeadTitle}>Profile Informations</Text>
                        <TouchableOpacity onPress={navigation.navigate('editProfile')}>
                            <View style={profileStyles.editContainer}>
                                <Icon name='edit' size={15} />
                                <Text style={{fontSize:15 , marginLeft:5}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {information.map((info , i)=>
                        <View key={i} style={profileStyles.infoDetailsContainer}>
                            <Text style={profileStyles.infoDetailsType}>{info.type}</Text>
                            <Text style={profileStyles.infoDetailsText}>{info.text}</Text>
                            
                            <Divider style={profileStyles.line}/> 
                        </View>
                    )}
                </View>

                <View
                    style={profileStyles.othersContainer}
                >
                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Switch to selling</Text>
                        <SwitchSelector
                            style={{width:120}}
                            options={options}
                            initial={isSellMode}
                            onPress={() => toggleConfirmOverlay()}
                            textColor={theme.primaryBlue}
                            selectedColor={theme.white}
                            buttonColor={theme.primaryBlue}
                            borderColor={theme.primaryBlue}
                            hasPadding
                            valuePadding={3}
                            height={35}
                        />
                    </View>

                    <Divider style={profileStyles.line}/>

                    <View style={profileStyles.otherDetailsContainer}>
                        <Text style={profileStyles.othersDetailsText}>Notification</Text>
                        <Switch 
                            trackColor={{ false: theme.gray, true: theme.secondaryBlue }}
                            thumbColor={isNotifEnabled ? theme.primaryBlue : theme.white}
                            ios_backgroundColor={theme.gray}
                            onValueChange={toggleSwitchNotif}
                            value={isNotifEnabled}
                        />
                    </View>

                    <Divider style={profileStyles.line}/>

                    <TouchableOpacity>
                        <View style={profileStyles.otherDetailsContainer}>
                            <Text style={profileStyles.othersDetailsText}>Language</Text>
                            <Text>English</Text>
                        </View>
                    </TouchableOpacity>

                    <Divider style={profileStyles.line}/>

                    <TouchableOpacity
                        onPress={()=>navigation.navigate('TOS')}
                    >
                        <View style={profileStyles.otherDetailsContainer}>
                            <Text style={profileStyles.othersDetailsText}>Privacy Policy & Terms of use</Text>
                            <Icon name="keyboard-arrow-right" size={25}  color={theme.gray}/>
                        </View>
                    </TouchableOpacity>

                    <Divider style={profileStyles.line}/>

                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Help')}
                    >
                        <View style={profileStyles.otherDetailsContainer}>
                            <Text style={profileStyles.othersDetailsText}>Help & Feedback</Text>
                            <Icon name="keyboard-arrow-right" size={25}  color={theme.gray}/>
                        </View>
                    </TouchableOpacity>

                    <Divider style={profileStyles.line}/>
                    
                    <TouchableOpacity>
                        <View style={profileStyles.otherDetailsContainer}>
                            <Text style={profileStyles.othersDetailsText}>Share this App</Text>
                        </View>
                    </TouchableOpacity>

                    <Divider style={profileStyles.line}/>


                </View>

                <View
                    style={profileStyles.logoutBtn}
                >
                    <PrimaryButton
                        title="Log out" 
                        onPress={onClick}
                        color={theme.primaryBlue}
                    />
                    <Text style={profileStyles.versionText}>version 1.0.0</Text>
                </View>
                
            </View>

            <Overlay isVisible={NotifOverlayVisible} onBackdropPress={toggleNotifOverlay}>
                <NotificationModal onConfirm={onConfirmNotif} onCancel={onCancelNotif}/>
            </Overlay>

            <Overlay isVisible={confirmationOverlay} onBackdropPress={toggleConfirmOverlay}>
                <ConfirmationMessage onConfirm={onConfirm} onCancel={onCancel} message={`Are you sure you want to switch to ${isSellMode?'buy':'sell'} mode`}/>
            </Overlay>

        </ScrollView>
    )
}

export default ProfileIndex
