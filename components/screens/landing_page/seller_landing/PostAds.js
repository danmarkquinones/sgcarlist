import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {scaleFont} from '../../../../utils/scale';
import CustomHeader from '../../../custom_components/customHeader';
import Spacer from '../../../custom_components/spacer';
import {Card} from 'react-native-elements';
import {theme} from '../../../contants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PrimaryButton} from '../../../custom_components/customButtons';
import {useNavigation} from '@react-navigation/core';

const PostAds = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        canGoBack={false}
        titleStyle={{
          fontSize: scaleFont(20),
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        title="SGCARLIST"
        isTitleCenter
      />
      <ScrollView style={{flex: 1}}>
        <Spacer bottom={24} />
        <Text style={styles.title}>Got a car to sell?</Text>
        <Spacer bottom={4} />
        <Text style={styles.subtitle}>
          Let us help you with the right product
        </Text>
        <Spacer bottom={24} />
        <View style={{paddingHorizontal: 24}}>
          <Card containerStyle={{borderRadius: 8}}>
            <Text style={styles.cardTitle}>Sell it on SGCarList</Text>
            <Spacer bottom={4} />
            <Text style={styles.cardSubtitle}>
              List your car on SGCarlist and Ut occaecat cupidatat non proident.
            </Text>

            <Spacer bottom={32} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.itemTitle}>Selling price</Text>
              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome5
                    key={i}
                    name="star"
                    size={15}
                    solid
                    color={theme.yellow}
                  />
                ))}
              </View>
            </View>
            <Spacer bottom={16} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.itemTitle}>Selling time</Text>
              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome5
                    key={i}
                    name="star"
                    size={15}
                    solid
                    color={theme.yellow}
                  />
                ))}
              </View>
            </View>
            <Spacer bottom={16} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.itemTitle}>Selling time</Text>
              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome5
                    key={i}
                    name="star"
                    size={15}
                    solid
                    color={theme.yellow}
                  />
                ))}
              </View>
            </View>
            <Spacer bottom={24} />
            <PrimaryButton title="Create Ad" color={theme.primaryBlue} />
          </Card>
        </View>

        <View style={{paddingHorizontal: 24}}>
          <Card containerStyle={{borderRadius: 8}}>
            <Text style={styles.cardTitle}>Sell it on our Partner</Text>
            <Spacer bottom={4} />
            <Text style={styles.cardSubtitle}>
              List your car on SGCarlist and Ut occaecat cupidatat non proident.
            </Text>

            <Spacer bottom={32} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.itemTitle}>Selling price</Text>
              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome5
                    key={i}
                    name="star"
                    size={15}
                    solid
                    color={theme.yellow}
                  />
                ))}
              </View>
            </View>
            <Spacer bottom={16} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.itemTitle}>Selling time</Text>
              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome5
                    key={i}
                    name="star"
                    size={15}
                    solid
                    color={theme.yellow}
                  />
                ))}
              </View>
            </View>
            <Spacer bottom={16} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.itemTitle}>Selling time</Text>
              <View style={{flexDirection: 'row'}}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesome5
                    key={i}
                    name="star"
                    size={15}
                    solid
                    color={theme.yellow}
                  />
                ))}
              </View>
            </View>
            <Spacer bottom={24} />
            <PrimaryButton
              onPress={() => navigation.navigate('CreateAdIndex')}
              title="Create Ad"
              color={theme.primaryBlue}
            />
          </Card>
        </View>
        <Spacer bottom={24} />

        <Text style={styles.footerText}>
          {' '}
          To post more than one ad,{' '}
          <Text style={{color: '#20A8F4'}}>contact us</Text>
        </Text>
        <Spacer bottom={32} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFont(20),
    fontWeight: 'bold',
    color: '#4F4A4A',
    textAlign: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: scaleFont(16),
    color: '#4F4A4A',
  },
  cardSubtitle: {
    fontSize: scaleFont(12),
    color: '#C2BEBE',
  },
  subtitle: {
    fontSize: scaleFont(14),
    color: '#C2BEBE',
    textAlign: 'center',
  },
  itemTitle: {
    fontSize: scaleFont(12),
    color: '#4F4A4A',
  },
  footerText: {
    fontSize: scaleFont(14),
    color: '#C2BEBE',
    textAlign: 'center',
  },
});
export default PostAds;
