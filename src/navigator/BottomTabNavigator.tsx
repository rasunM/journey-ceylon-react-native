import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/navigation_types';
import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AccomondationScreen from '../screens/accomondation/AccomondatioinScreen';
import HealthCare from '../screens/healthcare/HealthCare';
import ShoppingScreen from '../screens/shopping/ShoppingScreen';
import CustomButtonTab from '../components/CustomButtonTab';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomButtonTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accomondation" component={AccomondationScreen} />
      <Tab.Screen name="HealthCare" component={HealthCare} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
