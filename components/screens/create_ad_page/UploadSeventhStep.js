import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {theme} from '../../contants/colors';
import {TabView, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/core';
import Spacer from '../../custom_components/spacer';
import {PrimaryButton} from '../../custom_components/customButtons';

const initialLayout = {width: Dimensions.get('window').width};

const UploadSeventhStep = ({onScreenChange}) => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Descriptions'},
    {key: 'second', title: 'Equipments'},
    {key: 'third', title: 'Specifications'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return (
          <View style={{height: 250, padding: 16}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>
          </View>
        );
      case 'second':
        return (
          <View style={{height: 250, padding: 16}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>
          </View>
        );
      case 'third':
        return (
          <View style={{height: 250, padding: 16}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.lightBlue}}>
      <Image
        style={{
          width: '100%',
          height: 250,
        }}
        source={require('../../../assets/images/car3.jpg')}
      />
      <View style={{padding: 16, backgroundColor: theme.white}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Future 1 Premium MPV 1.6 Turbo
        </Text>
        <Text>85 - 90 KM Singapore</Text>
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: theme.white,
          borderTopWidth: 0.5,
          borderTopColor: theme.black,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{color: theme.primaryBlue, fontWeight: 'bold', fontSize: 18}}>
          15, 000 USD
        </Text>
        <Text>625 USD / month</Text>
      </View>

      <View
        style={{
          marginTop: 16,
          padding: 16,
          backgroundColor: theme.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>2012</Text>
        <Text>180, 000 KM</Text>
      </View>
      <View
        style={{
          borderTopWidth: 0.5,
          borderTopColor: theme.black,
          padding: 16,
          backgroundColor: theme.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Automatic</Text>
        <Text>1368 cc</Text>
      </View>
      <View
        style={{
          borderTopWidth: 0.5,
          borderTopColor: theme.black,
          padding: 16,
          backgroundColor: theme.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>White</Text>
        <Text>Used car</Text>
      </View>
      <View
        style={{
          borderTopWidth: 0.5,
          borderTopColor: theme.black,
          padding: 16,
          backgroundColor: theme.white,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Jurong Singapore</Text>
      </View>
      <Spacer bottom={16} />
      <View style={{height: 250}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{backgroundColor: 'transparent', elevation: 0}}
              renderLabel={({focused, route}) => {
                return (
                  <Text
                    style={{
                      fontWeight: '500',
                      color: focused ? theme.primaryBlue : theme.black,
                    }}>
                    {route.title}
                  </Text>
                );
              }}
              indicatorStyle={{backgroundColor: theme.primaryBlue}}
            />
          )}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{padding: 24, zIndex: 2, backgroundColor: theme.white}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 24,
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
            onPress={() => onScreenChange(7)}
            color={theme.primaryBlue}
            title="Next"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UploadSeventhStep;
