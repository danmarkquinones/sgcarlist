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

const UploadSecondStep = ({onScreenChange}) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Spacer bottom={8} />

        <Text style={styles.title}>Package Options</Text>
        <Text style={styles.subtitle}>
          Packages that we offer for your car advertisement:
        </Text>
        <Spacer bottom={24} />
        <View>
          <Spacer bottom={8} />
          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 32, color: '#2C9C22', fontWeight: 'bold'}}>
                S$90{' '}
              </Text>
              <Text style={{fontSize: 20, color: '#4F4A4A'}}>
                till vehicle is sold
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: '#bbb',
                marginVertical: 8,
              }}
            />
            <Text>
              This package will allow you to post a normal "Direct Owner"
              advertisement.
            </Text>
          </View>
          <Spacer bottom={24} />

          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: 5,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              overflow: 'hidden',
            }}>
            <View
              style={{
                backgroundColor: '#EA3636',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 8,
              }}>
              <Text style={{color: theme.white}}>
                GET 3x MORE SALES INQUIRIES
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme.primaryBlue,
                width: '100%',
                padding: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 32, color: '#36D828', fontWeight: 'bold'}}>
                  S$108{' '}
                </Text>
                <View>
                  <Text style={{fontSize: 14, color: '#fff', paddingRight: 16}}>
                    till vehicle is sold (with 1 day StarAd {'\n'}exposure)
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: '#bbb',
                  marginVertical: 8,
                }}
              />
              <Text style={{color: theme.white}}>
                Sell it fast with StarAd package as you will get over 100,000
                views a day.{'\n'}
              </Text>
            </View>
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Date of insertion *</Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="MM/DD/YYYY" />
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Title *</Text>
            <Text style={styles.sublabel}>
              Title : Eg. 2004 Toyota Vios 1.5A at $35K
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="Title" />
            <Text style={[styles.sublabel, {textAlign: 'right'}]}>0/52</Text>
          </View>
          <Spacer bottom={24} />
          <View>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.sublabel}>
              Description : Eg. Very low mileage, immaculate condition, cheapest
              in the market, etc.
            </Text>
            <Spacer bottom={8} />
            <PrimaryInput placeholder="" height={100} multiline={true} />
            <Text style={[styles.sublabel, {textAlign: 'right'}]}>0/80</Text>
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
              title="Cancel"
              color={theme.gray}
            />
          </View>
          <Spacer left={16} />
          <View style={{flex: 1}}>
            <PrimaryButton
              onPress={() => onScreenChange(2)}
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
    fontWeight: 'bold',
    color: '#4F4A4A',
  },
  sublabel: {
    color: '#4F4A4A',
    fontSize: 10,
  },
});
export default UploadSecondStep;
