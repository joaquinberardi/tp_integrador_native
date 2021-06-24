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
    ScrollView,
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
            busquedaHandler: "",
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

    addComment = (key,comment) => {
        let user = this.state.users.filter((user) => {return user.login.uuid === key})
        getLocal('localUsers').then((users) => {
            users = users.user.concat(comment)
            storeLocal('localUsers', users)
        })
    }

    render() {

        return(
            <View style={{flex:1}}>

            {/* <Header titulo = {"Mis Contactos"} /> */}
            
            <Header titulo={"Mis contactos"} navigation={this.props.navigation}/>
            
            <ScrollView>
            
            {/* El cant handler se ocupa de pedirle cierta cantidad de usuarios a la api? */}
            <View style={[{display:'flex'},{flexDirection:'row'}, {margin:14}, {justifyContent:"center"},{alignContent:'center'}]}>
                <TextInput style={[styles.input,{flex:3},{marginEnd:15}]} placeholder="Buscar" onChangeText={text => this.setState({busquedaHandler: text})}/>
                {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
                <TouchableOpacity style={[{alignSelf: 'center'},{elevation:2}]}>
                    <View style={styles.boton}>
                        <Text style={styles.botonText}>Buscar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            {/* Esta lista debe mostrar los contactos guardados en local storage */}
            <ListadeContactos titulo={"Contactos guardados"} usuarios = {this.state.users} deleteContact={this.deleteContact}  showModal = {this.showModal}/>

            </ScrollView>
            
            <ModalContacto selectItem={this.state.selectItem} Modal={this.state.Modal} closeModal={this.closeModal} addContact={this.addComment} />

            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <View style={[{backgroundColor:"transparent"},{position:"absolute"},{bottom:10},{alignSelf: "center"}]}>
                <TouchableOpacity  style={[styles.botonGuardarContactos,{justifyContent:"flex-end"}]} onPress={() => {getLocal('localUsers').then((users)=>{this.setState({users: users})})}}>
                        <View style={styles.textIconContainer}>
                            <Text style={[{alignSelf: 'center'}, {justifyContent: 'center'},styles.botonText]}>Cargar contactos</Text>
                            <Image style={styles.icono} source={require('../src/Icons/Synchronize.png')}/>
                        </View>
                </TouchableOpacity>
            </View>


            

        </View>
    )}
}
