import {Linking, Alert, Platform } from 'react-native'

export const onCallUser = (number) => {
    let phoneNumber = number.toString();

    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phoneNumber}`;
    }else {
        phoneNumber = `tel:${phoneNumber}`;
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