import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation_types';
import HomeScreen from '../screens/home/Home';
import BottomTabNavigator from './BottomTabNavigator';

const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
