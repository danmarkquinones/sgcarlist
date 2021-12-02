import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {theme} from '../../contants/colors';
import Spacer from '../../custom_components/spacer';
import logo from '../../../assets/images/qr.png';
import {PrimaryButton} from '../../custom_components/customButtons';

const UploadEighthStep = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.white}}>
      <View style={{padding: 24, flex: 1}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
          You are on the last step to {'\n'} create your ad.
        </Text>
        <Spacer bottom={40} />

        <Image
          source={logo}
          style={{
            width: '100%',
            height: 400,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Spacer bottom={48} />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            onPress={() => {}}
            color={theme.primaryBlue}
            title="Proceed"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UploadEighthStep;
