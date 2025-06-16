import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import SocialLoginButton from '../../../components/SocialLoginButton';
import {RootStackParamList} from '../../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

const ForgotPasswordScreen = ({navigation}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/logo.png')}
        style={styles.logo}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Forgot password?</Text>
        <Text style={styles.subHeadingText}>
          No worries! Let’s help you reset it.
        </Text>
        <Text style={styles.subHeadingText}>
          Enter the email address associated with your account. We’ll send you a
          OTP code to reset your password.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomTextField />
        <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}>
          <CustomSubmitButton text="Send" />
        </TouchableOpacity>
      </View>
      <View style={styles.seperatorContainer}>
        <View style={styles.centeredLine} />
        <Text style={styles.seperatorText}>Or</Text>
        <View style={styles.centeredLine} />
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBefore}>Back to </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBefore}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

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
    marginBottom: 10,
  },
  formContainer: {
    marginVertical: 20,
    gap: 30,
  },
  seperatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 25,
  },
  seperatorText: {
    color: colors.secondaryGrey,
    fontSize: 15,
    fontFamily: Fonts.Manrope.Regular,
  },
  centeredLine: {
    height: 1,
    flex: 1,
    opacity: 0.5,
    backgroundColor: colors.secondaryGrey,
  },
  signupContainer: {
    flexDirection: 'row',
    gap: 3,
    marginBottom: 20,
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
