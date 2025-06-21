import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import colors from '../../constants/colors';

const HomeScreen = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.name}>{user?.email}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    color: colors.primaryGreen,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
