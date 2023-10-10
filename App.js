import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Home from './src/pages/home/home';

export default function App() {
  return (
    <View style={styles.container}>
      <h2>Calibração de pulverizador</h2>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});
