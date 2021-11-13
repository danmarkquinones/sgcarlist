import React from 'react'
import {Button, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import onboarding from '../../../assets/images/login.png';
import logo from '../../../assets/images/sgcarlist_logo.png';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const Login = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            position: 'absolute',
            left: -55,
            top: -35,
            width: width,
            height: height / 2,
            transform: [{rotate: '-15deg'}],
          }}>
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0 ,.5)',
              width: width * 1.2,
              height: height / 2,
              zIndex: 10,
            }}
          />

          <Image
            source={onboarding}
            style={{
              position: 'absolute',
              flex: 1,
              width: width * 1.2,
              height: height / 2,
              resizeMode: 'stretch',
            }}
          />
        </View>
        <Spacer bottom={height / 3.5} />

        <View style={{padding: 24}}>
          <View
            style={{
              padding: 24,
              backgroundColor: 'rgba(255, 255, 255 ,.8)',
              borderRadius: 8,
            }}>
            <Image
              source={logo}
              style={{
                width: width - 100,
                height: 80,
              }}
            />
          </View>

          <Spacer bottom={48} />
          <PrimaryInput placeholder="Username" />
          <Spacer bottom={16} />
          <PrimaryInput placeholder="Password" />
          <Spacer bottom={8} />
          <Text
            style={{textAlign: 'right', color: '#20A8F4', fontWeight: 'bold'}}>
            Forgot Password?
          </Text>
          <Spacer bottom={48} />
          <Button
            color={'#254A7C'}
            onPress={() => navigation.navigate('LandingStacks')}
            title="LOGIN"
          />
          <Spacer bottom={16} />
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{color: '#20A8F4'}}>
              Sign up now!
            </Text>
          </Text>
          <Spacer bottom={48} />

          <Text style={{textAlign: 'center'}}>
            By using this service, you confirm that you have read, understood
            and that you accept our{' '}
            <Text style={{color: '#20A8F4'}}>Terms and Conditions</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login
