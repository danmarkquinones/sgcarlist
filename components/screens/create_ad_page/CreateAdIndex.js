import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import UploadFifthStep from './UploadFifthStep';
import UploadFourthStep from './UploadFourthStep';
import UploadSecondStep from './UploadSecondStep';
import UploadThirdStep from './UploadThirdStep';
import UploadVehicleNumber from './UploadVehicleNumber';

const CreateAd = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScreenChange = index => {
    setCurrentIndex(index);
  };

  const onPressBack = () => {
    if (currentIndex) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack(null);
    }
  };

  const screens = [
    <UploadVehicleNumber onScreenChange={onScreenChange} />,
    <UploadSecondStep onScreenChange={onScreenChange} />,
    <UploadThirdStep onScreenChange={onScreenChange} />,
    <UploadFourthStep onScreenChange={onScreenChange} />,
    <UploadFifthStep onScreenChange={onScreenChange} />,
  ];

  return (
    <View style={{flex: 1}}>
      <CustomHeader onPressBack={onPressBack} title="Create Ad" />
      {screens[currentIndex]}
    </View>
  );
};

const styles = StyleSheet.create({});
export default CreateAd;
