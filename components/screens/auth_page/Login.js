import React from 'react'
import {Button, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import onboarding from '../../../assets/images/login.png';
import logo from '../../../assets/images/sgcarlist_logo.png';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const Login = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: width,
            height: height,
            position: 'absolute',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0 ,.5)',
              width: width,
              height: height,
              zIndex: 10,
            }}
          />

          <Image
            source={onboarding}
            style={{
              position: 'absolute',
              flex: 1,
              width: width,
              height: height,
              resizeMode: 'cover',
            }}
          />
        </View>
        <Spacer bottom={height / 5} />

        <View>
          <View
            style={{
              padding: 24,
              backgroundColor: 'rgba(255, 255, 255 ,.8)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={logo}
              style={{
                width: '90%',
                height: 50,
                resizeMode: 'contain',
              }}
            />
          </View>

          <Spacer bottom={48} />
          <View style={{paddingHorizontal: 24}}>
            <PrimaryInput height={40} placeholder="Username" />
            <Spacer bottom={16} />
            <PrimaryInput height={40} placeholder="Password" />
            <Spacer bottom={24} />
            <Text
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
              txtStyle={{color: theme.white}}
            />

            <Spacer bottom={16} />
            <Text
              style={{
                textAlign: 'center',
                color: theme.white,
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

            <Text
              style={{textAlign: 'center', color: theme.white, fontSize: 12}}>
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
