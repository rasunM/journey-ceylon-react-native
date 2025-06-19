import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

type Props = {
  text: string;
  loading: boolean;
};

const CustomSubmitButton = ({text, loading}: Props) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.white} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
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
