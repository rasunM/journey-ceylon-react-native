import {View, Text, TextInput, StyleSheet} from 'react-native';
import CloseButton from '../assets/svg/close.svg';
import React from 'react';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

const CustomTextField = () => {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.textInputBar}
        placeholder="Enter your e-mail"
        placeholderTextColor={colors.secondaryGrey}
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
    borderRadius: 30,
    height: 58,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.secondaryGrey,
  },
  textInputBar: {
    width: '90%',
    height: '80%',
    fontFamily: Fonts.Manrope.Regular,
    color: colors.textInputBarFontColor,
  },
});
