import React from 'react';
import {Text, View, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {ListCard} from '../../custom_components/customCards';
import {theme} from '../../contants/colors';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import CustomHeader from '../../custom_components/customHeader';
import {scaleFont} from '../../../utils/scale';

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

const MyAdsIndex = () => {
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
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 24,
          width: '100%',
          backgroundColor: '#fff',
        }}>
        <Text>Price - Lowest</Text>
      </View>
      <View style={{flex: 1}}>
        <Spacer bottom={16} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <PrimaryInput placeholder="Search you listed car" />
        </View>
        <Spacer bottom={16} />
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={items}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ListCard
              onPress={() => navigation.navigate('ProductView', item)}
              car={item}
              Icon={() => (
                <FontAwesome5
                  name="star"
                  size={20}
                  solid
                  color={theme.yellow}
                />
              )}
              sellerMode={true}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyAdsIndex;
