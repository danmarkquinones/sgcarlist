import React, {useContext} from 'react';
import {Text, View, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {ListCard} from '../../custom_components/customCards';
import {theme} from '../../contants/colors';
import MyAdsIndex from '../my_ads_page/MyAdsIndex';
import {UserConfigContext} from '../../store/context_api/userContext';
import BuyerFavorites from './BuyerFavorites';

const items = [
  {
    id: '1',
    name: 'SUC High Speed V446',
    price: '1,499 USD',
    location: 'Jurong , Singapore',
    url: require('../../../assets/images/car1.jpg'),
  },
  {
    id: '2',
    name: 'RPB Meta Build V4374',
    price: '1,499 USD',
    location: 'Jurong , Singapore',
    url: require('../../../assets/images/car2.jpg'),
  },
  {
    id: '3',
    name: 'ABP Hi Morale V546',
    price: '1,499 USD',
    location: 'Jurong , Singapore',
    url: require('../../../assets/images/car3.jpg'),
  },
  {
    id: '4',
    name: 'ABB Critical V476',
    price: '1,499 USD',
    location: 'Jurong , Singapore',
    url: '',
  },
];

const FavoritesIndex = (props) => {
  const [userConfig] = useContext(UserConfigContext);
  return (
    <View style={{flex: 1}}>
      {userConfig.isSellMode === 0 ? <BuyerFavorites {...props} /> : <MyAdsIndex />}
    </View>
  );
};

export default FavoritesIndex;
