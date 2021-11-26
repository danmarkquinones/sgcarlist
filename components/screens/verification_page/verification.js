import React, {useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {theme} from '../../contants/colors';
import CustomAvatar from '../../custom_components/customAvatar';
import {sellersStyles} from '../../styles/sellersStyles';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {About, Listings, Reviews} from './SellerViewScene';
import {TabView, TabBar} from 'react-native-tab-view';
import {cars, reviews} from '../../contants/dummyCarData';
import CustomHeader from '../../custom_components/customHeader';
import EmailVerification from './email_verification';
import MobileVerification from './mobile_verification';

const initialLayout = {width: Dimensions.get('window').width};

const Verification = props => {
  const {navigation, route} = props;
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
    <View style={{flex: 1}}>
      <CustomHeader />
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
        style={{backgroundColor: theme.lightBlue, padding: 24}}
      />
      <View style={{padding: 24, backgroundColor: theme.lightBlue}}>
        <Text style={{textAlign: 'center', color: theme.black, fontSize: 12}}>
          By using this service, you confirm that you have read, understood and
          that you accept our{' '}
          <Text style={{color: '#20A8F4'}}>Terms and Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

export default Verification;
