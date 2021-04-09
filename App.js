import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'


import AppScreen from './app/components/AppScreen';
import BaseColors from './app/config/BaseColors';
import RegisterScreen from './app/screens/RegisterScreen';
import SplashScreen from './app/screens/SplashScreen';
import StackNavigator from './app/navigation/StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
