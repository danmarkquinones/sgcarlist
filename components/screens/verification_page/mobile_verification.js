import React from 'react';
import {View, Text} from 'react-native';
import {PricingButton} from 'react-native-elements/dist/pricing/PricingCard';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const MobileVerification = () => {
  return (
    <View>
      <Spacer bottom={48} />
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
        We will send you a One Time Password on this mobile number
      </Text>
      <Spacer bottom={24} />
      <PrimaryInput
        height={40}
        placeholder="Mobile Number"
        Icon={() => (
          <View
            style={{
              backgroundColor: theme.primaryBlue,
              height: '100%',
              width: 60,
              marginRight: -10,
              paddingTop: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: theme.white}}>Send</Text>
          </View>
        )}
      />
      <Spacer bottom={24} />
      <PrimaryInput height={40} placeholder="OTP" />
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
        color={theme.primaryBlue}
        title="Submit"
        txtStyle={{textTransform: 'capitalize', color: theme.white}}
      />
    </View>
  );
};

export default MobileVerification;
