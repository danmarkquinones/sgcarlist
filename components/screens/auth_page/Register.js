import React from 'react'
import {Button, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import register_img from '../../../assets/images/register.png';
import {theme} from '../../contants/colors';
import logo from '../../../assets/images/sgcarlist_logo.png';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {PrimaryButton} from '../../custom_components/customButtons';

const Register = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1}}>
        <Spacer bottom={24} />
        <View
          style={{
            position: 'absolute',
            width: width,
            height: height,
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
            source={register_img}
            style={{
              position: 'absolute',
              flex: 1,
              width: width,
              height: height,
            }}
          />
        </View>

        <View style={{zIndex: 10}}>
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
          <Spacer bottom={32} />
          <View style={{paddingHorizontal: 24}}>
            <PrimaryInput height={40} placeholder="First Name" />
            <Spacer bottom={24} />
            <PrimaryInput height={40} placeholder="Last Name" />
            <Spacer bottom={24} />
            <PrimaryInput height={40} placeholder="Email" />
            <Spacer bottom={24} />
            <PrimaryInput height={40} placeholder="Contact number" />
            <Spacer bottom={24} />
            <PrimaryInput height={40} placeholder="Password" />
            <Spacer bottom={24} />
            <PrimaryInput height={40} placeholder="Confirm password" />
            <Spacer bottom={24} />

            <PrimaryButton
              color={'#254A7C'}
              onPress={() => navigation.navigate('LandingStacks')}
              title="Sign Up"
              txtStyle={{color: theme.white}}
            />
            <Spacer bottom={24} />
            <Text style={{textAlign: 'center', color: theme.white}}>
              Already have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{color: '#20A8F4'}}>
                Sign in!
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
      </View>
    </ScrollView>
  );
};

export default Register
