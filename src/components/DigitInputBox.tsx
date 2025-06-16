import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import colors from '../constants/colors';

const DigitInputBox = () => {
  return (
    <TextInput
      maxLength={1}
      keyboardType="number-pad"
      style={styles.container}
      textAlign="center"
    />
  );
};

export default DigitInputBox;

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.textInputBarColor,
    fontSize: 20,
    color: colors.black,
  },
});
