import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import CustomRadioButton from '../../custom_components/customRadioButton';
import Spacer from '../../custom_components/spacer';

const UploadVehicleNumber = ({onScreenChange}) => {
  const navigation = useNavigation();
  const [selectedValueContact, setSelectedValueContact] = useState('yes');
  const [selectedValueEmail, setSelectedValueEmail] = useState('yes');
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Spacer bottom={8} />
        <Text style={styles.title}>Personal Details</Text>
        <Text style={styles.subtitle}>
          note: (*) fields are compulsory to be filled up
        </Text>
        <Spacer bottom={40} />
        <View>
          <View>
            <Text style={styles.label}>Name *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Name" />
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Contact No. *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Contact No." />
          </View>
          <Spacer bottom={24} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Display Contact Number?</Text>
            <CustomRadioButton
              data={[
                {value: 'yes', label: 'Yes'},
                {value: 'no', label: 'No'},
              ]}
              selectedValue={selectedValueContact}
              onSelectRadio={value => setSelectedValueContact(value)}
            />
          </View>
          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>Email Address *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Email Address" />
          </View>
          <Spacer bottom={24} />

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Enable inquiry via email?</Text>
            <CustomRadioButton
              data={[
                {value: 'yes', label: 'Yes'},
                {value: 'no', label: 'No'},
              ]}
              selectedValue={selectedValueEmail}
              onSelectRadio={value => setSelectedValueEmail(value)}
            />
          </View>
          <Spacer bottom={24} />

          <View>
            <Text style={styles.label}>Preferred Viewing Area *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Preferred Viewing Area" />
          </View>
        </View>

        <Spacer bottom={24} />
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
              title="Back"
              color={theme.secondaryBlue}
            />
          </View>
          <Spacer left={16} />
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(1)}
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
});
export default UploadVehicleNumber;
