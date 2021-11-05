import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const OnboardingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.onboardingBtn}>
        <Text style={styles.onboardingBtnText}>Get Started</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  onboardingBtn: {
    backgroundColor: '#254A7C',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
    marginTop: 48,
  },
  onboardingBtnText: {
    color: '#fff',
    textTransform: 'uppercase',
  },
});
