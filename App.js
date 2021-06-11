import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Screen_Inicio} from './Screens/Screen_Inicio';
import {Screen_1} from './Screens/Screeen_1';




const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
      <Drawer.Navigator drawerStyle={{
    backgroundColor: '#c6cbef'}}>
        <Drawer.Screen name="Inicio" component={Screen_Inicio} />
        <Drawer.Screen name="Screen 2" component={Screen_1} />
      </Drawer.Navigator>
      </NavigationContainer>
    )}}
export default App;

