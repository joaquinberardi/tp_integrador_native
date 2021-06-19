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


import {getAPI} from '../api/RandomUser';
import {saveLocal} from '../api/saveLocal';
import {getLocal} from '../api/getLocal';


export class Screen_Inicio extends Component {
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
    
    renderItem =({item}) => {
        return(
        <View>
            <Text> {item.name.last}, {item.name.first} </Text>
        </View>
        )};

    keyExtractor= (item,idx) => idx.toString();

    render() {
        console.log(this.state.users);
        return(
        <View>
            <View style= {styles.header}>
                <TouchableOpacity>
                             <Text>           </Text> 
                            <Image source={require('../src/Icons/BurgerIcon.png')}  style={styles.burgerIcon}/>
                            {/* No se ve sin el Text */}
                </TouchableOpacity>
                <Text style= {styles.h1header}> Agenda de contactos</Text>
            </View>

            <TextInput style={styles.input} placeholder="Ingresar Cantidad" onChangeText={text => this.setState({cantHandler: text})}></TextInput>
            
            <TouchableOpacity  onPress={ () => this.setState({cant: this.state.cantHandler})}>
                <View style={styles.boton}>
                    <Text style={styles.botonText} onPress= { () => this.addContacts(this.state.cantHandler)} >Agregar</Text>
                </View>
            </TouchableOpacity>

            <ListadeContactos usuarios={this.state.users} />
            {console.log(this.state.users)}


            <TouchableOpacity  onPress={ () => this.setState({cant: this.state.cantHandler})}>
                <View style={styles.boton}>
                    <Text style={styles.botonText}>Guardar contactos</Text>
                </View>
            </TouchableOpacity>
            {/* <Modal
            visible= {this.state.showModal}
            >
                <View>
                    <Text> MODAL </Text>

                </View>
            </Modal>

            <Button title="Show Modal" onPress={ () => this.setState({showModal: True})}> </Button> */}
        </View>
    )}
}
