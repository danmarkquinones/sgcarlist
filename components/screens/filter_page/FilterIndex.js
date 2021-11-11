import React from 'react';
import {Text, View} from 'react-native';

const FilterIndex = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#254A7C',
          height: 60,
          justifyContent: 'center',
          padding: 16,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
          Search / Filter
        </Text>
      </View>
    </View>
  );
};

export default FilterIndex;
