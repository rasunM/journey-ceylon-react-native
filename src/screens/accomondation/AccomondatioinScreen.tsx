import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AccomondationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Accomondation Screen</Text>
    </View>
  );
};

export default AccomondationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
