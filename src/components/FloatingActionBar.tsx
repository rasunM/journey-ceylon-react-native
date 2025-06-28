import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';

const FloatingActionBar = () => {
  return (
    <View style={styles.fabButton}>
      <Image
        source={require('../assets/png/aipng.png')}
        style={styles.fabIcon}
      />
    </View>
  );
};

export default FloatingActionBar;

const styles = StyleSheet.create({
  fabButton: {
    backgroundColor: colors.white,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});
