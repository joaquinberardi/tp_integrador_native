import React, { Component } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from '../src/Styles';

import {
    View,
    Text,
    FlatList,
    Modal,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import {ListadeContactos} from '../Components/ListadeContactos';
import {Header} from '../Components/Header';

import {getAPI} from '../api/RandomUser';
import {saveLocal} from '../api/saveLocal';
import {getLocal} from '../api/getLocal';


export class MisContactos extends Component {
    constructor(){
        super();
        this.state = {
            cantHandler: "",
            users: [],
        }
    }
    render() {
        return(
        <View>

            {/* <Header titulo = {"Mis Contactos"} /> */}
            
            <View style= {styles.header}>
                <View style={styles.burgerButton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                                <Image style={styles.IconBurger} source={require('../src/Icons/BurgerIcon.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style= {styles.h1header}> Agenda de contactos</Text>
            </View>



            {/* Esta lista debe mostrar los contactos guardados en local storage */}
            <ListadeContactos usuarios={this.state.users} />
            {console.log(this.state.users)}

        </View>
    )}
}
