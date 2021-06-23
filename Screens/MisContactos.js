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

    async getData(){
        try{
            const resultado =- await AsyncStorage.getItem('localUsers');
            this.setState({importedUsers: JSON.parse(resultado)})
            console.log(importedUsers);
        }catch(e){
            console.log(e);
        }
    };

    render() {

        return(
            <View style={{flex:1}}>

            {/* <Header titulo = {"Mis Contactos"} /> */}
            
            <Header titulo={"Mis contactos"} navigation={this.props.navigation}/>

            {/* Esta lista debe mostrar los contactos guardados en local storage */}
            <ListadeContactos titulo={"Contactos guardados"} usuarios = {this.state.importedUsers} />

            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={ this.getData.bind(this)}>
                <View >
                    <Text style={styles.botonText}>Cargar datos</Text>
                </View>
            </TouchableOpacity>


        </View>
    )}
}
