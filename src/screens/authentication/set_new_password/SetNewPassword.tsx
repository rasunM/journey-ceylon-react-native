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
  'SetUpNewPassword'
>;

const SetupNewPassword = ({navigation}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/png/logo.png')}
        style={styles.logo}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Forgot password?</Text>
        <Text style={styles.subHeadingText}>
          Create a strong password to secure your account.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomTextField />
        <CustomTextField />
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetSuccessfull')}>
          <CustomSubmitButton text="Reset Password" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetupNewPassword;

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
    gap: 25,
  },
});
