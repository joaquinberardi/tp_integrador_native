import React, { Component } from 'react';
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


export class PapeleraDeReciclaje extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render() {
        return(
        <View>
            
            <Header titulo={"Papelera de reciclaje"} navigation={this.props.navigation}/>

            <ListadeContactos titulo={"Contactos eliminados"} usuarios={this.state.users} />


        </View>
    )}
}
