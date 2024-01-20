import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loader = (): JSX.Element => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
