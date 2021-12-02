import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {useNavigation} from '@react-navigation/core';
import CustomRadioButton from '../../custom_components/customRadioButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const UploadSixthStep = ({onScreenChange}) => {
  const navigation = useNavigation();
  const [selectedValueEmail, setSelectedValueEmail] = useState('0');

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Spacer bottom={8} />

          <Text style={styles.title}>Upload Pictures</Text>
          <Text style={styles.subtitle}>
            Upload requirements: You can upload upto 9 images. Total image file
            size should not exceed 6MB and it's dimension should not exceed
            (4800 x 3600)pixels.
          </Text>

          <Spacer bottom={24} />

          <View
            style={{
              width: '100%',
              height: 150,
              backgroundColor: theme.white,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#C2BEBE',
              borderStyle: 'dashed',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="images" size={50} color="#C2BEBE" />
            <Text>Upload Images</Text>
          </View>

          <Text style={{marginVertical: 16}}>Image Preview</Text>

          <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 8,
              marginBottom: 16,
            }}
            source={require('../../../assets/images/car2.jpg')}
          />

          <Image
            style={{
              width: '100%',
              height: 200,
              borderRadius: 8,
              marginBottom: 16,
            }}
            source={require('../../../assets/images/car3.jpg')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => navigation.goBack(null)}
              title="Back"
              color={theme.secondaryBlue}
            />
          </View>
          <Spacer left={16} />
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(6)}
              color={theme.primaryBlue}
              title="Next"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightBlue,
    padding: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleFont(20),
    color: '#4F4A4A',
  },
  subtitle: {
    color: '#4F4A4A',
  },
  label: {
    color: '#4F4A4A',
  },
  sublabel: {
    color: '#4F4A4A',
    fontSize: 10,
  },
});
export default UploadSixthStep;
