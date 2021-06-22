import React, { Component } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from '../src/Styles';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import {ListadeContactos} from '../Components/ListadeContactos';


import {getAPI} from '../api/RandomUser';
import {saveLocal} from '../api/saveLocal';
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


    keyExtractor= (item,idx) => idx.toString();

    render() {
        return(
        <View>

            {/* Header de la screen */}

            {/* Header de la screen */}
            <View style= {styles.header}>
                <View style={styles.burgerButton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                                <Image style={styles.IconBurger} source={require('../src/Icons/BurgerIcon.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style= {styles.h1header}> Importar contactos</Text>
            </View>

            

            {/* En este input ingresamos cuantos contactos queremos traer de la API */}
            <TextInput style={styles.input} placeholder="Ingresar Cantidad" onChangeText={text => this.setState({cantHandler: text})}></TextInput>
            {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
            <TouchableOpacity  onPress={ () => this.setState({cant: this.state.cantHandler})}>
                <View style={styles.boton}>
                    <Text style={styles.botonText} onPress= { () => this.addContacts(this.state.cantHandler)} >Agregar</Text>
                </View>
            </TouchableOpacity>

            {console.log(this.state.users)}


            {/* Esta lista debe mostrar los contactos que traemos de la API */}
            <ListadeContactos usuarios={this.state.users} />


            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  onPress={ () => this.setState({cant: this.state.cantHandler})}>
                <View style={styles.boton}>
                    <Text style={styles.botonText}>Guardar contactos</Text>
                </View>
            </TouchableOpacity>


        </View>
    )}
}
