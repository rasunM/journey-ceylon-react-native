import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

const CustomSubmitButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log in</Text>
    </View>
  );
};

export default CustomSubmitButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    backgroundColor: colors.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  text: {
    color: colors.white,
    fontFamily: Fonts.Poppins.SemiBold,
    fontSize: 18,
    textAlign: 'center',
  },
});
