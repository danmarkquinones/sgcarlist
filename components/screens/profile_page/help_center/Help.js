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
        const email = 'support@gmail.com'
        const subject = 'Carlist.SG Report System'
        const body = 'To report any fraud or misconduct that such employees or parties suspect is happening in Client organisation.%0D%0A%0D%0AAll reports received will be referred to Client organisation for follow-up actions or investigations.%0D%0A%0D%0AWhile you are encouraged to disclose your identity, this is not mandatory. We respect your desire for anonymity, and to preserve the confidentiality of the information you provide. However, our ability to contact you if required to seek further clarification or information may play a role in determining the effectiveness of any investigation.%0D%0A%0D%0A1.1 About who would you like to make this report?%0D%0AEmployee name:%0D%0A%0D%0A%0D%0A1.2 Please indicate date, time of conversation and subject :%0D%0ADepartment:%0D%0ADate & Time :%0D%0ASubject (s) :%0D%0A%0D%0A1.3Would you like to provide your name and contact details?%0D%0AName :%0D%0AContact information :%0D%0AEmail :'
        Linking.openURL(
            `mailto:${email}?subject=${subject}&body=${body}`
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
