import React, { Component } from 'react';
import { Image } from 'react-native';
import {styles} from './src/Styles';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {MisContactos} from './Screens/MisContactos';
import {ImportarContactos} from './Screens/ImportarContactos';
import {PapeleraDeReciclaje} from './Screens/PapeleraDeReciclaje';
import {AcercaDe} from './Screens/AcercaDe';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator 
          drawerStyle={{
            backgroundColor: '#FAFAFA',
            width: 380,
        }}
        drawerContentOptions={{
          activeTintColor: "#C62828",
          labelStyle: {fontSize:22, fontWeight: 'bold'}
        }}
        >
          <Drawer.Screen name="Mis contactos" component={MisContactos} options={{drawerIcon: (() => <Image style={styles.drawerIcon} source={require('./src/Icons/Contacts.png')} />)}}/>
          <Drawer.Screen name="Importar contactos" component={ImportarContactos} options={{drawerIcon: (() => <Image style={styles.drawerIcon} source={require('./src/Icons/DownloadBlack.png')} />)}}/>
          <Drawer.Screen name="Papelera de reciclaje" component={PapeleraDeReciclaje} options={{drawerIcon: (() => <Image style={styles.drawerIcon} source={require('./src/Icons/TrashCan.png')} />)}}/>
          <Drawer.Screen name="Acerca de" component={AcercaDe} options={{drawerIcon: (() => <Image style={styles.drawerIcon} source={require('./src/Icons/Info.png')} />)}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )}}
export default App;

