import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';

const UploadVehicleNumber = ({onScreenChange}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Spacer bottom={48} />
      <Text style={styles.title}>Let's upload a vehicle</Text>
      <Text style={styles.subtitle}>
        A vehicle plate number or a reference number will help you find ads
        easily
      </Text>
      <Spacer bottom={60} />
      <View>
        <View>
          <Text style={styles.label}>Vehicle plate number *</Text>
          <Spacer bottom={8} />
          <PrimaryInput placeholder="Plate number" />
        </View>
        <Spacer bottom={24} />
        <View>
          <Text style={styles.label}>Reference number *</Text>
          <Spacer bottom={8} />
          <PrimaryInput placeholder="Plate number" />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <PrimaryButton
          onPress={() => navigation.goBack(null)}
          title="Cancel"
          color={theme.tertiaryBlue}
        />
        <Spacer bottom={16} />
        <PrimaryButton
          onPress={() => onScreenChange(1)}
          color={theme.primaryBlue}
          title="Next"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.lightBlue,
    padding: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: scaleFont(20),
    color: '#4F4A4A',
  },
  subtitle: {
    color: '#C2BEBE',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  label: {
    fontWeight: 'bold',
    color: '#4F4A4A',
  },
});
export default UploadVehicleNumber;
