import React, { Component } from 'react';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import {styles} from '../src/Styles';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Modal,
    ActivityIndicator,
} from 'react-native';

import {ListadeContactos} from '../Components/ListadeContactos';
import {Header} from '../Components/Header';
import {ModalContacto} from '../Components/ModalContacto';

import {getAPI} from '../api/RandomUser';
import {storeLocal} from '../api/storeLocal';
import {getLocal} from '../api/getLocal';


export class ImportarContactos extends Component {
    constructor(){
        super();
        this.state = {
            cantHandler: "",
            users: [],
            selectItem: null,
            Modal: false,
            selectedItems: [],
        }
    }

    componentDidMount(){
        getAPI(10)
        .then( (usuarios) => {
            this.setState({users: usuarios, activity: false});
        })
    }

    addContacts = (n) => {
        getAPI(n)
        .then( (usuarios) => {
            usuarios = this.state.users.concat(usuarios)
            this.setState({users: usuarios});
        })
    }

    // selectContact = (key) => {
    //     this.setState({selectedItems: this.selectedItems.push()})
    // }

    deleteContact = (key) => {
        let user = this.state.users.filter((user) => {return user.login.uuid === key})
        getLocal('recycleBin').then((bin) => {
            let deletedUsers = bin.concat(user)
            storeLocal('recycleBin', deletedUsers)
            let users = this.state.users.filter((user) => {return user.login.uuid !== key})
            this.setState({users: users})
        })
    }

    keyExtractor= (item,idx) => idx.toString();
    
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

            {/* Header de la screen */}
            <Header titulo={"Importar Contactos"} navigation={this.props.navigation}/>
            


            <View style={[{display:'flex'},{flexDirection:'row'}, {margin:14}, {justifyContent:"center"},{alignContent:'center'}]}>
            <TextInput style={[styles.input,{flex:3},{marginEnd:15}]} placeholder="Ingresar Cantidad" onChangeText={text => this.setState({cantHandler: text})}/>
            {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
            {/* Que seria el cant:?*/}
            <TouchableOpacity style={[{alignSelf: 'center'},{elevation:2}]} onPress= { () => this.addContacts(this.state.cantHandler)}>
            <View style={[styles.boton,{flex:2}]}>
                    <Text style={styles.botonText}  >Agregar</Text>
                </View>
            </TouchableOpacity>
            </View>
            
            {/* Esta lista debe mostrar los contactos que traemos de la API */}
            <ListadeContactos titulo={"Contactos encontrados"} usuarios={this.state.users} showModal = {this.showModal} deleteContact={this.deleteContact}/>
            { this.state.activity &&
            <ActivityIndicator
                    size="large"
                    colo="red"/>
            }
            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={() => storeLocal('localUsers', this.state.users)}>
                <View >
                    <Text style={styles.botonText}>Guardar contactos</Text>
                </View>
            </TouchableOpacity>

            <ModalContacto selectItem={this.state.selectItem} Modal={this.state.Modal} closeModal={this.closeModal} />



        </View>
    )}
}
