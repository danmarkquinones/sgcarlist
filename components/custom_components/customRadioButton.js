import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {theme} from '../contants/colors';

const CustomRadioButton = ({data, selectedValue, onSelectRadio}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {data.map(item => (
        <TouchableWithoutFeedback onPress={() => onSelectRadio(item.value)}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 16,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 50,
                backgroundColor: theme.white,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor:
                    selectedValue === item.value
                      ? theme.primaryBlue
                      : theme.gray,
                  borderRadius: 50,
                }}
              />
            </View>
            <Text>{item.label}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default CustomRadioButton;
