import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import {RootStackParamList} from '../../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import VerifiedIcon from '../../../assets/svg/done.svg';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ResetSuccessfull'
>;

const ResetSuccessfull = ({navigation}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <VerifiedIcon width={120} height={120} fill={colors.primaryGreen} />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Password Reset Successful!</Text>
        <Text style={styles.subHeadingText}>
          You’ve successfully updated your password. You can now log in to your
          account and continue your travel journey.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}>
        <CustomSubmitButton text="Login" />
      </TouchableOpacity>
    </View>
  );
};

export default ResetSuccessfull;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: colors.white,
  },
  headingContainer: {gap: 10},
  headingText: {
    color: colors.primaryGreen,
    fontSize: 23,
    fontFamily: Fonts.Manrope.Bold,
    textAlign: 'center',
  },
  subHeadingText: {
    color: colors.secondaryGrey,
    fontSize: 15,
    fontFamily: Fonts.Manrope.Regular,
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    marginVertical: 25,
  },
});
