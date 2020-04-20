import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './Root';
export default function App() {
  return (
    <Root />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
