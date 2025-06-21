import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import {RootStackParamList} from '../../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Formik} from 'formik';
import {ResetPasswordSchema} from '../../../utils/validation/authValidation';
import {
  logoutUser,
  updatePassword,
} from '../../../firebase/authentication/authhandlers';
import {useDispatch} from 'react-redux';
import {clearAuth} from '../../../redux/slices/authSlice';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SetUpNewPassword'
>;

const SetupNewPassword = ({navigation}: LoginScreenProps) => {
  const dispatch = useDispatch();
  const [focusField, setFocusField] = useState<string | null>(null);
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      validationSchema={ResetPasswordSchema}
      onSubmit={async values => {
        await updatePassword(values.password);
        await logoutUser();
        dispatch(clearAuth());
        navigation.navigate('ResetSuccessfull');
      }}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
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
              text={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              onBlur={() => {
                handleBlur('password');
                setFocusField(null);
              }}
              onFocus={() => setFocusField('password')}
              isFocused={focusField === 'password'}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <CustomTextField
              placeholder="Confirm password"
              text={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              secureTextEntry
              onBlur={() => {
                handleBlur('confirmPassword');
                setFocusField(null);
              }}
              onFocus={() => setFocusField('confirmPassword')}
              isFocused={focusField === 'confirmPassword'}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
            <TouchableOpacity onPress={() => handleSubmit()}>
              <CustomSubmitButton text="Reset Password" loading={false} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
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
  error: {
    color: 'red',
    marginTop: -15,
    marginBottom: 10,
    fontSize: 13,
    fontFamily: Fonts.Manrope.Regular,
  },
});
