import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {theme} from '../../contants/colors';
import logo from '../../../assets/images/carlistsg_white.png';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {PrimaryButton} from '../../custom_components/customButtons';
import {api} from '../../store/api_calls/useApi';
import PhoneInput from 'react-native-phone-number-input';

const Register = props => {
  const {navigation} = props;

  const phoneInput = useRef(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');

  const [disabled, setDisabled] = useState(true);

  const onSignUp = async () => {
    const params = {
      user_first_name: firstName,
      user_last_name: lastName,
      user_email: email,
      role_name: 'Advertiser',
      contact_number: contact,
      password: password,
      password_confirmation: confirmPassword,
      sms: true,
    };

    let res = await api.POST(params, '/users/registration');
    if (res?.data?.success) {
      navigation.navigate('Verification', {params});
    } else {
      alert('Oops! Something went wrong.');
    }
  };

  useEffect(() => {
    validateFields();
  }),
    [email, lastName, firstName, password, contact, confirmPassword];

  const validateFields = () => {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let isValidEmail = false;

    if (regexEmail.test(email)) {
      isValidEmail = true;
    } else {
      isValidEmail = false;
    }

    if (
      lastName &&
      firstName &&
      email &&
      password &&
      confirmPassword &&
      contact &&
      password === confirmPassword &&
      isValidEmail
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.white}}>
      <View style={{flex: 1}}>
        <Spacer bottom={24} />

        <View style={{zIndex: 10}}>
          <Image
            source={logo}
            style={{
              alignSelf: 'center',
              width: 150,
              height: 150,
              resizeMode: 'contain',
            }}
          />
          <Spacer bottom={16} />
          <View style={{paddingHorizontal: 24}}>
            <PrimaryInput
              onChange={setFirstName}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="First Name"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              onChange={setLastName}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Last Name"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              onChange={setEmail}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Email"
            />
            <Spacer bottom={24} />
            <PhoneInput
              ref={phoneInput}
              defaultValue={contact}
              defaultCode="SG"
              layout="first"
              containerStyle={{
                width: '100%',
                height: 55,
                borderColor: theme.primaryBlue,
                borderWidth: 2,
                borderRadius: 5,
              }}
              textContainerStyle={{
                paddingVertical: 0,
                borderRadius: 5,
              }}
              textInputStyle={{fontSize: 14}}
              codeTextStyle={{fontSize: 14}}
              onChangeFormattedText={text => {
                setContact(text);
              }}
            />
            <Spacer bottom={24} />
            <PrimaryInput
              onChange={setPassword}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Password"
              isPassword
            />
            <Spacer bottom={24} />
            <PrimaryInput
              onChange={setConfirmPassword}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Confirm password"
              isPassword
            />
            <Spacer bottom={24} />

            <PrimaryButton
              disabled={disabled}
              color={'#254A7C'}
              onPress={onSignUp}
              title="Sign Up"
              txtStyle={{color: theme.white}}
            />
            <Spacer bottom={24} />
            <Text style={{textAlign: 'center'}}>
              Already have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{color: '#20A8F4'}}>
                Sign in!
              </Text>
            </Text>
            <Spacer bottom={24} />
            <Text style={{textAlign: 'center', fontSize: 12}}>
              By using this service, you confirm that you have read, understood
              and that you accept our{' '}
              <Text style={{color: '#20A8F4'}}>Terms and Conditions</Text>
            </Text>
            <Spacer bottom={24} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
