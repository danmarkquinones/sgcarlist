import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import blueBg from '../../../assets/images/blueBg.jpeg';
import onboarding from '../../../assets/images/onboarding1.png';
import {OnboardingButton} from '../../custom_components/customButtons';
import {styles} from './styles';

const OnboardingIndex = props => {
  const {width, height} = Dimensions.get('screen');
  const {navigation} = props;

  const onClick = () => {
    navigation.navigate('TabNav');
  };

  return (
    <View style={styles.container}>
      <Image
        source={blueBg}
        style={{flex: 1, position: 'absolute', width: width, height: height}}
      />
      <Text style={styles.title}>Find Your {'\n'}Dream Car</Text>
      <Text style={styles.subtitle}>
        Search for your dream car from top car list site in Singapore
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end' , zIndex:2}}>
        <OnboardingButton onPress={onClick} />
      </View>
      <Image
        source={onboarding}
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          width: width,
          height: height / 2,
        }}
      />
    </View>
  );
};

export default OnboardingIndex
