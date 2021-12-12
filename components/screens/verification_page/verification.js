import React, {useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {theme} from '../../contants/colors';
import {TabView, TabBar} from 'react-native-tab-view';
import {cars, reviews} from '../../contants/dummyCarData';
import CustomHeader from '../../custom_components/customHeader';
import EmailVerification from './email_verification';
import MobileVerification from './mobile_verification';
import logo from '../../../assets/images/verificationBg.png';
import Spacer from '../../custom_components/spacer';
import {PrimaryButton} from '../../custom_components/customButtons';
import {useNavigation} from '@react-navigation/core';

const initialLayout = {width: Dimensions.get('window').width};

const Verification = props => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [config, setConfig] = useState({
    sortBy: 'ascending',
    isGridView: true,
    ads: cars,
    reviews: reviews,
  });
  const [scrollY, setScrollY] = useState();

  const [routes] = useState([
    {key: 'first', title: 'Email Verification'},
    {key: 'second', title: 'Mobile OTP'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <EmailVerification />;
      case 'second':
        return <MobileVerification />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.white,
      }}>
      <CustomHeader title="Verification" />

      <View style={{flex: 1, justifyContent: 'flex-start'}}>
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
          style={{padding: 24, zIndex: 2}}
        />

        <View style={{paddingHorizontal: 24, zIndex: 20, marginBottom: 150}}>
          <Spacer bottom={24} />
          <PrimaryButton
            onPress={() => navigation.navigate('ResetPassword')}
            color={theme.primaryBlue}
            title="Submit"
            txtStyle={{textTransform: 'capitalize', color: theme.white}}
          />
        </View>

        <View style={{padding: 24, zIndex: 20}}>
          <Text style={{textAlign: 'center', color: theme.black, fontSize: 12}}>
            By using this service, you confirm that you have read, understood
            and that you accept our{' '}
            <Text style={{color: '#20A8F4'}}>Terms and Conditions</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Verification;
