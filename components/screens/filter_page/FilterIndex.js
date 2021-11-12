import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../contants/colors';

import CustomHeader from '../../custom_components/customHeader';
import PrimaryInput from '../../custom_components/customInput';
import AntIcon from 'react-native-vector-icons/AntDesign';

const FilterIndex = () => {
  return (
    <View style={{backgroundColor: theme.lightBlue, flex: 1}}>
      <CustomHeader title="Search / Filter" />
      <View style={{padding: 24}}>
        <PrimaryInput
          placeholder="Keyword"
          onChange={() => {}}
          value={() => {}}
          editable
          Icon={() => <AntIcon name="search1" size={25} />}
        />
      </View>
    </View>
  );
};

export default FilterIndex;
