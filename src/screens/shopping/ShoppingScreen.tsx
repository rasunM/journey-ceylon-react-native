import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ShoppingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Shopping Screen</Text>
    </View>
  );
};

export default ShoppingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
