import React from 'react'
import {Button, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import onboarding from '../../../assets/images/login.png';
import logo from '../../../assets/images/carlistsg_white.png';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const Login = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;


  return (
    <View style={{flex: 1, backgroundColor: theme.white}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={{zIndex: 20}}>
          <Image
            source={logo}
            style={{
              width: '100%',
              height: '50%',
              resizeMode: 'contain',
            }}
          />

          <View style={{paddingHorizontal: 24}}>
            <PrimaryInput
              onChange={() => {}}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Username"
            />
            <Spacer bottom={16} />
            <PrimaryInput
              onChange={() => {}}
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Password"
              isPassword
            />
            <Spacer bottom={24} />
            <Text
              onPress={() => navigation.navigate('Verification')}
              style={{
                textAlign: 'right',
                color: '#20A8F4',
                fontWeight: 'bold',
              }}>
              Forgot Password?
            </Text>
            <Spacer bottom={48} />

            <PrimaryButton
              color={'#254A7C'}
              onPress={() => navigation.navigate('LandingStacks')}
              title="Login"
              txtStyle={{color: theme.white, fontWeight: 'bold'}}
            />

            <Spacer bottom={16} />
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Don't have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Register')}
                style={{color: '#20A8F4'}}>
                Sign up now!
              </Text>
            </Text>
            <Spacer bottom={48} />

            <Text style={{textAlign: 'center', fontSize: 12}}>
              By using this service, you confirm that you have read, understood
              and that you accept our{' '}
              <Text style={{color: '#20A8F4'}}>Terms and Conditions</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login
