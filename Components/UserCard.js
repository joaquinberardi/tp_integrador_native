

// Este componente debera mostrar en formato card el detalle del contacto

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,

} from 'react-native';

import {styles} from '../src/Styles';
import {storeLocal} from '../api/storeLocal';
import {getLocal} from '../api/getLocal';

export class UserCard extends Component {
    constructor(){
        super();
        this.state = {
            selected: false
        };
    }

    // addContact = () => {
    //     if (selected){
    //         getLocal('localUsers').then((storage)=>{
    //             let users = storage.push(this.props.contacto)
    //             storeLocal('localUsers', users)
    //         })
    //     }
    // }

    render() {
        return(
        // <TouchableOpacity onPress={()=>{this.setState({selected: !this.state.selected})}}>
            <View style={styles.listCard} key={this.props.contacto.login.uuid}>

                <Image style= {styles.listImage} source={{uri: this.props.contacto.picture.thumbnail}}/>
               
                <View style={styles.contenedorDetallesUserCard}>
                    <Text style={[styles.p,{fontWeight: "bold"}]}> {this.props.contacto.name.last}, {this.props.contacto.name.first} </Text>
                    <Text style={styles.p}> {this.props.contacto.dob.age} Años </Text>
                </View>

                <View style={styles.contenedorBotonesUserCard} >
                    <TouchableOpacity  style={styles.botonVerMas} onPress= { () => this.props.showModal(this.props.contacto.login.uuid)}> 
                        <View >
                            <Text style={styles.textoVerMas} > Ver mas </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.botonImportar} onPress={()=>{this.props.deleteContact(this.props.contacto.login.uuid)}}> 
                        <View >
                            <Text style={styles.textoImportar}> Descartar </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        // </TouchableOpacity>
    )}
}
