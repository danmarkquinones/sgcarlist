import React from 'react'
import {Button, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import register_img from '../../../assets/images/register.png';
import {theme} from '../../contants/colors';
import logo from '../../../assets/images/carlistsg_white.png';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {PrimaryButton} from '../../custom_components/customButtons';

const Register = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;
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
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="First Name"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Last Name"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Email"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Contact number"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Password"
            />
            <Spacer bottom={24} />
            <PrimaryInput
              borderColor={theme.primaryBlue}
              height={50}
              placeholder="Confirm password"
            />
            <Spacer bottom={24} />

            <PrimaryButton
              color={'#254A7C'}
              onPress={() => navigation.navigate('LandingStacks')}
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

export default Register
