import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  BottomTabParamList,
  RootStackParamList,
} from '../../types/navigation_types';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {logoutUser} from '../../firebase/authentication/authhandlers';
import {useDispatch} from 'react-redux';
import {clearAuth} from '../../redux/slices/authSlice';

type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Profile'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="LogOut"
        color={colors.primaryGreen}
        onPress={() => {
          logoutUser();
          dispatch(clearAuth());
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
