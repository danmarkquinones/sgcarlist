import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {scaleFont} from '../../../utils/scale';
import {theme} from '../../contants/colors';
import {PrimaryButton} from '../../custom_components/customButtons';
import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

const UploadSecondStep = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Spacer bottom={48} />

        <View>
          <Text style={{fontWeight: 'bold', fontSize: scaleFont(16)}}>
            Plate number: AAA-DA059
          </Text>
          <Spacer bottom={8} />
          <View
            style={{
              width: '100%',
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="camera" size={32} />
            <Text style={{fontWeight: 'bold'}}>Upload thumbnail</Text>
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Vehicle unit *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="AAA-DA059" />
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Vehicle registration card *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="AS324FASDFAG24" />
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Description</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Plate number" />
          </View>
        </View>
        <Spacer bottom={24} />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <PrimaryButton
            onPress={() => navigation.goBack(null)}
            title="Cancel"
            color={theme.tertiaryBlue}
          />
          <Spacer bottom={16} />
          <PrimaryButton color={theme.primaryBlue} title="Publish" />
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
export default UploadSecondStep;
