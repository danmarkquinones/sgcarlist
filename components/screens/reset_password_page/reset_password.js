import React from 'react';
import {View, Text} from 'react-native';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const ResetPassword = ({}) => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Reset Password" />
      <Spacer bottom={24} />
      <View style={{paddingHorizontal: 24}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Create your new password{' '}
        </Text>
        <Spacer bottom={8} />
        <Text>
          In order to protect your account , make sure your password contains a
          combination of capital letters , number(s) , and atleast one special
          characters.
        </Text>

        <Spacer bottom={40} />

        <PrimaryInput height={40} placeholder="New Password" />
        <Spacer bottom={16} />

        <PrimaryInput height={40} placeholder="Confirm Password" />

        <Spacer bottom={24} />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Didn't receive code?{' '}
          <Text style={{color: '#20A8F4'}}>Request Again!</Text>
        </Text>

        <Spacer bottom={24} />

        <PrimaryButton
          color={'#254A7C'}
          onPress={() => {}}
          title="Submit"
          txtStyle={{color: theme.white}}
        />

        <Spacer bottom={48} />

        <Text style={{textAlign: 'center', fontSize: 12}}>
          By using this service, you confirm that you have read, understood and
          that you accept our{' '}
          <Text style={{color: '#20A8F4'}}>Terms and Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default ResetPassword;
