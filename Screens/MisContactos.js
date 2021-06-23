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
import {ModalContacto} from '../Components/ModalContacto';


import {getAPI} from '../api/RandomUser';
import {storeLocal} from '../api/storeLocal';
import {getLocal} from '../api/getLocal';


export class MisContactos extends Component {
    constructor(){
        super();
        this.state = {
            cantHandler: "",
            users: [],
            selectItem: null,
            Modal: false,
        }
    }

    componentDidMount(){
        //getLocal('localUsers').then((users) => {this.setState({users: users})})
    }

    deleteContact = (key) => {
        let user = this.state.users.filter((user) => {return user.login.uuid === key})
        getLocal('recycleBin').then((bin) => {
            let deletedUsers = bin.concat(user)
            storeLocal('recycleBin', deletedUsers)
            let users = this.state.users.filter((user) => {return user.login.uuid !== key})
            this.setState({users: users})
        })
    }

    showModal = (key) => {
        let user = this.state.users.filter((user) => { return user.login.uuid === key})
        this.setState({selectItem: user[0]});
        this.setState({Modal: true});
    }

    closeModal = () => {
        this.setState({Modal: false})
    }

    render() {

        return(
            <View style={{flex:1}}>

            {/* <Header titulo = {"Mis Contactos"} /> */}
            
            <Header titulo={"Mis contactos"} navigation={this.props.navigation}/>

            {/* Esta lista debe mostrar los contactos guardados en local storage */}
            <ListadeContactos titulo={"Contactos guardados"} usuarios = {this.state.users} deleteContact={this.deleteContact}  showModal = {this.showModal}/>

            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={() => {getLocal('localUsers').then((users)=>{this.setState({users: users})})}}>
                <View >
                    <Text style={styles.botonText}>Cargar datos</Text>
                </View>
            </TouchableOpacity>

            <ModalContacto selectItem={this.state.selectItem} Modal={this.state.Modal} closeModal={this.closeModal} />


        </View>
    )}
}
