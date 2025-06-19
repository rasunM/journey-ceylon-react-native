import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import SocialLoginButton from '../../../components/SocialLoginButton';
import {RootStackParamList} from '../../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [focusField, setFocusField] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/logo.png')}
        style={styles.logo}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Welcome Back!</Text>
        <Text style={styles.subHeadingText}>
          Log in to continue your Sri Lankan adventure.
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
        <CustomTextField
          placeholder="Enter password"
          onChangeText={setPassword}
          text={password}
          secureTextEntry
          onFocus={() => setFocusField('password')}
          onBlur={() => setFocusField(null)}
          isFocused={focusField === 'password'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeTab')}
          disabled={true}>
          <CustomSubmitButton text="Log in" loading={true} />
        </TouchableOpacity>
      </View>
      <View style={styles.seperatorContainer}>
        <View style={styles.centeredLine} />
        <Text style={styles.seperatorText}>Or</Text>
        <View style={styles.centeredLine} />
      </View>
      <View style={styles.socialLoginContainer}>
        <SocialLoginButton logo="facebook" text="Facebook" />
        <SocialLoginButton logo="google" text="Google" />
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBefore}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: colors.backgroundColor,
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
  },
  formContainer: {
    marginVertical: 20,
    gap: 20,
  },
  forgotPasswordText: {
    color: colors.secondaryGrey,
    fontSize: 15,
    fontFamily: Fonts.Manrope.Regular,
    textAlign: 'right',
    marginBottom: 5,
  },
  seperatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 15,
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
  socialLoginContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
    gap: 10,
  },
});
