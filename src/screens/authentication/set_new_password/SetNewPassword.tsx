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
  'SetUpNewPassword'
>;

const SetupNewPassword = ({navigation}: LoginScreenProps) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [focusField, setFocusField] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/logo.png')}
        style={styles.logo}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Set a New Password</Text>
        <Text style={styles.subHeadingText}>
          Create a strong password to secure your account.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomTextField
          placeholder="Enter password"
          onChangeText={setPassword}
          text={password}
          onFocus={() => setFocusField('password')}
          onBlur={() => setFocusField(null)}
          isFocused={focusField === 'password'}
        />

        <CustomTextField
          placeholder="Confirm password"
          onChangeText={setConfirmPassword}
          text={confirmPassword}
          onFocus={() => setFocusField('confirmPassword')}
          onBlur={() => setFocusField(null)}
          isFocused={focusField === 'confirmPassword'}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetSuccessfull')}>
          <CustomSubmitButton text="Reset Password" loading={false} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetupNewPassword;

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
    marginVertical: 15,
    gap: 15,
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
    gap: 25,
  },
});
