import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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
  const [email, setEmail] = useState<string>('');
  const [focusField, setFocusField] = useState<string | null>(null);

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
        <CustomTextField
          placeholder="Enter your e-mail"
          onChangeText={setEmail}
          text={email}
          onFocus={() => setFocusField('email')}
          onBlur={() => setFocusField(null)}
          isFocused={focusField === 'email'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}>
          <CustomSubmitButton text="Send" loading={false} />
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
    marginVertical: 0,
    gap: 30,
  },
  seperatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 35,
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
