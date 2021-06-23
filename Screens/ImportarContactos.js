import React, { Component } from 'react';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import {styles} from '../src/Styles';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import {ListadeContactos} from '../Components/ListadeContactos';
import {Header} from '../Components/Header';

import {getAPI} from '../api/RandomUser';
import {storeLocal} from '../api/storeLocal';
import {getLocal} from '../api/getLocal';


export class ImportarContactos extends Component {
    constructor(){
        super();
        this.state = {
            cantHandler: "",
            users: [],
        }
    }

    componentDidMount(){
        getAPI(10)
        .then( (usuarios) => {
            this.setState({users: usuarios});
        })
    }

    addContacts = (n) => {
        getAPI(n)
        .then( (usuarios) => {
            usuarios = this.state.users.concat(usuarios)
            this.setState({users: usuarios});
        })
    }

    deleteContact = (key) => {
        users = this.state.users.filter((user) => {return user.key != key})
        this.setState({users: users})
    }

    keyExtractor= (item,idx) => idx.toString();

    render() {
        return(
            <View style={{flex:1}}>



            {/* Header de la screen */}
            <Header titulo={"Importar Contactos"} navigation={this.props.navigation}/>

            {/* En este input ingresamos cuantos contactos queremos traer de la API */}
            <TextInput style={styles.input} placeholder="Ingresar Cantidad" onChangeText={text => this.setState({cantHandler: text})}></TextInput>
            {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
            <TouchableOpacity  onPress={ () => this.setState({cant: this.state.cantHandler})}>
                <View style={styles.boton}>
                    <Text style={styles.botonText} onPress= { () => this.addContacts(this.state.cantHandler)} >Agregar</Text>
                </View>
            </TouchableOpacity>
            

            {/* Esta lista debe mostrar los contactos que traemos de la API */}
            <ListadeContactos titulo={"Contactos encontrados"} usuarios={this.state.users} />

            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={ () => storeLocal('localUsers', this.state.users)}>
                <View >
                    <Text style={styles.botonText}>Guardar contactos</Text>
                </View>
            </TouchableOpacity>




        </View>
    )}
}
