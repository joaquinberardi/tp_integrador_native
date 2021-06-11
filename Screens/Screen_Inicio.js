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
    TouchableOpacity
} from 'react-native';

import {ListadeContactos} from '../Components/ListadeContactos';


import {getAPI} from '../api/RandomUser';
import {saveLocal} from '../api/saveLocal';
import {getLocal} from '../api/getLocal';


export class Screen_Inicio extends Component {
    constructor(){
        super();
        this.state = {
            users:[],
            cantHandler: "",
        }
    }

    componentDidMount(){
        getAPI()
        .then( (usuarios) => {
            this.setState({users: usuarios});
        })
    };

    renderItem =({item}) => {
        return(
        <View>
            <Text> {item.name.last}, {item.name.first} </Text>
        </View>
        )};

    keyExtractor= (item,idx) => idx.toString();

    render() {
        return(
        <View>
            <View>
                <Text style= {styles.h1}> Mis contactosssss </Text>
            </View>

            <TextInput style={styles.input} placeholder="Ingresar Cantidad" onChangeText={text => this.setState({cantHandler: text})}></TextInput>
            <TouchableOpacity style={styles.boton} onPress={ () => this.setState({cant: this.state.cantHandler})}>
                <View>
                    <Text style={styles.botonText}>Agregar</Text>
                </View>
            </TouchableOpacity>


            <ListadeContactos/>

            {/* <FlatList
            data = { this.state.users }
            keyExtractor= { this.keyExtractor }
            renderItem= { this.renderItem }
            /> */}

            <Button title="Guardar contactos"></Button>

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
