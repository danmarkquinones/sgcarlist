import React , {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {ListCard} from '../../custom_components/customCards';
import {theme} from '../../contants/colors';
import PrimaryInput from '../../custom_components/customInput';
import Spacer from '../../custom_components/spacer';
import CustomHeader from '../../custom_components/customHeader';
import {scaleFont} from '../../../utils/scale';
import SorterComponent from '../../reusable_components/sorterComponent';
import { cars } from '../../contants/dummyCarData';


const MyAdsIndex = () => {

  const navigation = useNavigation();

  const [config , setConfig] = useState({
    sortBy:'ascending',
    isGridView:true,
    listCars:cars,
  })

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

      <SorterComponent config={config} setConfig={setConfig} />

      <View style={{flex: 1}}>
        <Spacer bottom={16} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <PrimaryInput placeholder="Search your listed car" />
        </View>
        <Spacer bottom={16} />
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          data={cars}
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
              // sellerMode={true}
            />
          )}
        />
      </View>
    </View>
  );
};

export default MyAdsIndex;
