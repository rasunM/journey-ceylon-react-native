import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Fonts} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import CustomSubmitButton from '../../../components/CustomSubmitButton';
import {RootStackParamList} from '../../../types/navigation_types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DigitInputBox from '../../../components/DigitInputBox';
import {
  addUserToFirestore,
  checkOTPValidation,
  getUserFromFirestore,
} from '../../../firebase/authentication/auth_firestore_handlers';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {
  createUser,
  sendOTP,
} from '../../../firebase/authentication/authhandlers';
import {clearAuth} from '../../../redux/slices/authSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'VerifyEmail'>;

const VerifyEmail = ({navigation, route}: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  1;

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs[index + 1].current?.focus();
    }
  };

  const verifyOtp = async () => {
    const code = otp.join('');
    if (code.length === 4) {
      if (route.params?.from === 'SignUp') {
        if (user) {
          const result = await checkOTPValidation(user.email!, code);
          if (result) {
            // create user in authentication
            createUser(user.email!, user.password!);
            // create user in firestore
            addUserToFirestore(user.userID, user.email!, user.userName!);
            // clear user state in redux
            dispatch(clearAuth());
            // navigate to login screen
            navigation.navigate('Login');
          } else {
            Alert.alert('OTP Verification', 'Invalid OTP');
          }
        }
      } else {
        const result = await checkOTPValidation(user?.email!, code);
        if (result) {
          navigation.navigate('SetUpNewPassword');
        } else {
          Alert.alert('OTP Verification', 'Invalid OTP');
        }
      }
    } else {
      console.log('Please enter all 4 digits');
    }
  };

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
          {otp.map((digit, index) => (
            <DigitInputBox
              key={index}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              inputRef={inputs[index]}
            />
          ))}
        </View>

        <TouchableOpacity onPress={verifyOtp}>
          <CustomSubmitButton text="Verify Now" loading={false} />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupTextBefore}>Didn’t receive it?</Text>
        <TouchableOpacity
          onPress={() => {
            if (user) {
              sendOTP(user?.email!);
            }
          }}>
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
