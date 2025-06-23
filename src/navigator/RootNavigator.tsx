import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation_types';
import HomeScreen from '../screens/home/Home';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/authentication/login/LoginScreen';
import SignUpScreen from '../screens/authentication/signup/SignUpScreen';
import ForgotPasswordScreen from '../screens/authentication/forgot_password/ForgotPassword';
import SetupNewPassword from '../screens/authentication/set_new_password/SetNewPassword';
import VerifyEmail from '../screens/authentication/verify_email/VerifyEmail';
import ResetSuccessfull from '../screens/authentication/reset_successful/ResetSuccessfulScreen';
import OnBoarding from '../screens/onboarding/OnBoarding';

const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SetUpNewPassword"
        component={SetupNewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetSuccessfull"
        component={ResetSuccessfull}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
