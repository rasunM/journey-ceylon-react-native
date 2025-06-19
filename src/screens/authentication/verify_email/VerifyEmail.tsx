import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import SocialLoginButton from '../../../components/SocialLoginButton';
import {RootStackParamList} from '../../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DigitInputBox from '../../../components/DigitInputBox';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VerifyEmail'
>;

const VerifyEmail = ({navigation}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/logo.png')}
        style={styles.logo}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Verify Your Email</Text>
        <Text style={styles.subHeadingText}>
          We’ve sent a 4-digit code to your email.
        </Text>
        <Text style={styles.subHeadingText}>
          Enter the code below to confirm your email and continue.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.digitContainer}>
          <DigitInputBox />
          <DigitInputBox />
          <DigitInputBox />
          <DigitInputBox />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SetUpNewPassword')}>
          <CustomSubmitButton text="Verify Now" loading={false} />
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBefore}>Didn’t receive it?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}>Resend Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    paddingTop: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: colors.backgroundColor,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headingContainer: {
    gap: 10,
    marginVertical: 15,
  },
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
  digitContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  signupContainer: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 25,
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
