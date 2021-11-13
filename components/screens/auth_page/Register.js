import React from 'react'
import {Button, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import register_img from '../../../assets/images/register.png';
import {theme} from '../../contants/colors';
import logo from '../../../assets/images/sgcarlist_logo.png';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const Register = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, padding: 24}}>
        <View
          style={{
            position: 'absolute',
            width: width,
            height: height / 2,
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

        <View
          style={{
            position: 'absolute',
            height: height / 2,
            width: width * 2.5,
            backgroundColor: theme.lightBlue,
            bottom: -150,
            left: -65,
            transform: [{rotate: '15deg'}],
            zIndex: 10,
          }}
        />

        <View style={{zIndex: 10}}>
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
          <Spacer bottom={32} />
          <PrimaryInput placeholder="First Name" />
          <Spacer bottom={24} />
          <PrimaryInput placeholder="Last Name" />
          <Spacer bottom={24} />
          <PrimaryInput placeholder="Email" />
          <Spacer bottom={24} />
          <PrimaryInput placeholder="Contact number" />
          <Spacer bottom={24} />
          <PrimaryInput placeholder="Password" />
          <Spacer bottom={24} />
          <PrimaryInput placeholder="Confirm password" />
          <Spacer bottom={24} />
          <Button
            color={theme.primaryBlue}
            onPress={() => navigation.navigate('Login')}
            title="Sign Up"
          />
          <Spacer bottom={24} />
          <Text style={{textAlign: 'center'}}>
            Already have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{color: '#20A8F4'}}>
              Sign in
            </Text>
            !
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register
