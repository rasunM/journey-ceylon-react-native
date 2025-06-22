import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {Fonts} from '../constants/fonts';

type LogoType = 'google' | 'facebook';

type Props = {
  logo: LogoType;
  text: string;
};

const logos: Record<LogoType, any> = {
  google: require('../assets/png/google.png'),
  facebook: require('../assets/png/facebook.png'),
};

const SocialLoginButton = ({logo, text}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={logos[logo]} style={styles.logo} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.textInputBarColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  logo: {
    width: 38,
    height: 38,
  },
  text: {
    fontSize: 18,
    color: colors.black,
    fontFamily: Fonts.Manrope.SemiBold,
    marginLeft: 10,
  },
});
