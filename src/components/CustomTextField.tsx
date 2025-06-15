import {View, Text, TextInput, StyleSheet} from 'react-native';
import CloseButton from '../assets/svg/close.svg';
import React from 'react';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

const CustomTextField = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputBorder}
        placeholder="Enter your e-mail"
      />
      <CloseButton width={20} height={20} fill={colors.secondaryGrey} />
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textInputBarColor,
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 15,
    opacity: 0.65,
  },
  textInputBorder: {
    width: '90%',
    height: 50,
    fontFamily: Fonts.Manrope.Regular,
  },
});
