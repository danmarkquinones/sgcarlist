import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

const CustomHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#254A7C',
        height: 60,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon
        onPress={() => navigation.goBack(null)}
        name="arrow-left"
        size={25}
        color={'#fff'}
      />
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18,
          marginLeft: 16,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
