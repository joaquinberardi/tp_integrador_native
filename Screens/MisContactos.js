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
import {storeLocal} from '../api/storeLocal';
import {getLocal} from '../api/getLocal';


export class MisContactos extends Component {
    constructor(){
        super();
        this.state = {
            cantHandler: "",
            users: [],
        }
    }

    componentDidMount(){
        //getLocal('localUsers').then((users) => {this.setState({users: users})})
    }

    render() {

        return(
            <View style={{flex:1}}>

            {/* <Header titulo = {"Mis Contactos"} /> */}
            
            <Header titulo={"Mis contactos"} navigation={this.props.navigation}/>

            {/* Esta lista debe mostrar los contactos guardados en local storage */}
            <ListadeContactos titulo={"Contactos guardados"} usuarios = {this.state.users} />

            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={() => {getLocal('localUsers').then((users)=>{this.setState({users: users})})}}>
                <View >
                    <Text style={styles.botonText}>Cargar datos</Text>
                </View>
            </TouchableOpacity>


        </View>
    )}
}
