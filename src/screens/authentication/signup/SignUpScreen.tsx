import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation_types';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/logo.png')}
        style={styles.logo}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Create Your Account</Text>
        <Text style={styles.subHeadingText}>
          Start your journey across Sri Lanka with a personalized travel
          experience.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomTextField />
        <CustomTextField />
        <CustomTextField />
        <CustomTextField />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <CustomSubmitButton />
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBefore}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: colors.white,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headingContainer: {},
  headingText: {
    color: colors.primaryGreen,
    fontSize: 35,
    fontFamily: Fonts.Manrope.Bold,
    textAlign: 'center',
  },
  subHeadingText: {
    color: colors.secondaryGrey,
    fontSize: 15,
    fontFamily: Fonts.Manrope.Regular,
    textAlign: 'center',
  },
  formContainer: {
    marginVertical: 20,
    gap: 20,
  },

  signupContainer: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  signupText: {
    color: colors.primaryGreen,
    fontFamily: Fonts.Manrope.Bold,
    fontSize: 15,
  },
  signupTextBefore: {
    fontSize: 15,
    color: colors.secondaryGrey,
    fontFamily: Fonts.Manrope.Regular,
  },
});
