import React from 'react'
import { View , TextInput } from 'react-native'
import { theme } from '../contants/colors'

const PrimaryInput = ({
    placeholder,
    onChange,
    value,
    borderColor,
    Icon,
    editable,
    multiline,
    height,
    textAlignVertical
}) => {
    return (
      <View
        style={{
          backgroundColor: theme.white,
          borderWidth: borderColor ? 2 : 0,
          borderColor: borderColor ?? '',
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          overflow: 'hidden',
        }}>
        <TextInput
          style={{
            height: height ?? 50,
            fontSize: 15,
          }}
          editable={editable}
          placeholder={placeholder}
          onChangeText={text => onChange(text)}
          value={value}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
        />
        {Icon && <Icon />}
      </View>
    );
}

export default PrimaryInput
