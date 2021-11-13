import React from 'react'
import { View , Text, Linking, Alert, Platform } from 'react-native'
import { globalStyles } from '../../../styles/globalStyles'
import { helpStyles } from './helpStyles'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../../contants/colors';
import { Button } from 'react-native-elements';
import { PrimaryButton } from '../../../custom_components/customButtons';
import CustomHeader from '../../../custom_components/customHeader';

const Help = () => {

    const onCall = () => {

        let phoneNumber = '09065092731';

        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:09123456789`;
        }else {
            phoneNumber = `tel:09123456789`;
        }

        Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
            Alert.alert('Phone number is not available');
            } else {
            return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
    }

    const onEmailLaunch = () => {
        Linking.openURL(
            'mailto:support@gmail.com?subject=Support Me&body=Description mo to'
        )
    }

    return (
        <View
            style={globalStyles.container}
        >
            <CustomHeader title="Help & Feedback"/>
            
            <View style={helpStyles.helpContainer}>
                <View
                    style={helpStyles.iconContainer}
                >
                    <FAIcon style={helpStyles.groupIcon} name="group" size={100} color={theme.secondaryBlue}/>
                    <MatIcon style={helpStyles.callIcon} name="call" size={50} color={theme.primaryBlue}/>
                    {/* <FA5Icon style={helpStyles.mailIcon} name="mail-bulk" size={40} color={theme.primaryBlue}/> */}
                </View>

                <View style={helpStyles.textContainer}>
                    <Text style={helpStyles.textHeader}>We are here to assist you</Text>
                    <Text style={helpStyles.textParagraph}>If you required help with listings or have general enquiries, call or send us an email</Text>

                    <View style={helpStyles.buttons}>
                        <PrimaryButton
                            color={theme.primaryBlue}
                            title="Call Us : 0912 345 6789"
                            onPress={onCall}
                            Icon={()=><MatIcon name="call" size={20} color={theme.white}/>}
                        />
                    </View>
                    <View style={helpStyles.buttons}>
                        <PrimaryButton
                            color={theme.primaryBlue}
                            title="Email Us : sgcarlist@email.com"
                            onPress={onEmailLaunch}
                            Icon={()=><MatIcon name="mail" size={20} color={theme.white}/>}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Help
