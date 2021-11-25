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

const UploadThirdStep = ({onScreenChange}) => {
  const navigation = useNavigation();
  const [selectedValueEmail, setSelectedValueEmail] = useState('0');

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Spacer bottom={8} />

          <Text style={styles.title}>Car Details 1 of 3</Text>
          <Text style={styles.subtitle}>
            note: (*) fields are compulsory to be filled up
          </Text>

          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>Car Plate Number *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="AAA-DA059" />
          </View>

          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>Owner ID Type *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="ID Type" />
          </View>

          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>Owner ID *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Owner ID" />
          </View>
          <Spacer bottom={24} />

          <View style={{flexDirection: 'row'}}>
            <CustomRadioButton
              data={[
                {
                  value: '0',
                  label:
                    'Use my carplate number and owner ID to fill my car details automatically',
                },
                {
                  value: '1',
                  label: 'I wish to manually input all my car details',
                },
              ]}
              selectedValue={selectedValueEmail}
              onSelectRadio={value => setSelectedValueEmail(value)}
              isHorizontal
            />
          </View>
          <Spacer bottom={24} />
        </View>

        <View
          style={{
            flex: 1,
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
              onPress={() => onScreenChange(3)}
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
export default UploadThirdStep;
