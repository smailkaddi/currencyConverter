import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,FlatList,useState } from 'react-native';
import FlatButton from './Button/Button';
import Navigator from './routes/homeStack';

export default function App() {
 

  return (
      <Navigator/>
  );
}

