import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Fonts} from '../constants/fonts';
import colors from '../constants/colors';

const Logo = () => {
  return <Text style={styles.logo}>Travel Ceylon</Text>;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    fontFamily: Fonts.Lobster.Regular,
    fontSize: 22,
    color: colors.primaryGreen,
  },
});
