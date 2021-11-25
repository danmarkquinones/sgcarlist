import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import {useNavigation} from '@react-navigation/core';
import CustomRadioButton from '../../custom_components/customRadioButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const UploadFourthStep = ({onScreenChange}) => {
  const navigation = useNavigation();
  const [selectedValueEmail, setSelectedValueEmail] = useState('0');

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Spacer bottom={8} />

          <Text style={styles.title}>Car Details 2 of 3</Text>
          <Text style={styles.subtitle}>
            note: (*) fields are compulsory to be filled up
          </Text>

          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>Registration Date *:</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="MM/DD/YYYY" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>Engine Capacity *:</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Engine Capacity" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>OMV :</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="OMV" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>ARF :</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="ARF" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>COE :</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="COE" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>COE Expiry Date :</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="MM/DD/YYYY" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>Number of Owners *:</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Number of Owners" />
          </View>
          <Spacer bottom={8} />

          <View>
            <Text style={styles.label}>Type of Vehicle *:</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Type of Vehicle" />
          </View>
          <Spacer bottom={24} />
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
              title="Cancel"
              color={theme.gray}
            />
          </View>
          <Spacer left={16} />
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(4)}
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
export default UploadFourthStep;
