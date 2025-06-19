import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomTextField from '../../../components/CustomTextField';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation_types';
import {Formik} from 'formik';
import {SignUpSchema} from '../../../utils/validation/authValidation';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const [focusField, setFocusField] = useState<string | null>(null);

  return (
    <Formik
      initialValues={{
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        console.log(values);
        navigation.navigate('VerifyEmail');
      }}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
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
            <CustomTextField
              placeholder="Enter your Name"
              text={values.userName}
              onChangeText={handleChange('userName')}
              onBlur={() => {
                handleBlur('userName');
                setFocusField(null);
              }}
              onFocus={() => setFocusField('userName')}
              isFocused={focusField === 'userName'}
            />
            {touched.userName && errors.userName && (
              <Text style={styles.error}>{errors.userName}</Text>
            )}

            <CustomTextField
              placeholder="Enter your e-mail"
              text={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => {
                handleBlur('email');
                setFocusField(null);
              }}
              onFocus={() => setFocusField('email')}
              isFocused={focusField === 'email'}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

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
              <CustomSubmitButton text="Sign Up" loading={false} />
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupTextBefore}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signupText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: colors.backgroundColor,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headingContainer: {gap: 10, marginVertical: 15},
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
    marginVertical: 10,
    gap: 20,
  },

  signupContainer: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    marginTop: 10,
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
  error: {
    color: 'red',
    marginTop: -15,
    marginBottom: 10,
    fontSize: 13,
    fontFamily: Fonts.Manrope.Regular,
  },
});
