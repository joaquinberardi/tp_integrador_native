

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

export class UserCard extends Component {
    constructor(){
        super();
        this.state = {
            selectItem: null,
            showModal: false,
        };
    }

    showModal(item){
        this.setState({selectItem: item, showModal: true});
        console.log(this.state.selectItem);
    }

    render() {
        return(
        <View style={styles.listCard} key={this.props.contacto.login.uuid}>

                <Image style= {styles.listImage} source={{uri: this.props.contacto.picture.thumbnail}}/>
               
                <View style={styles.contenedorDetallesUserCard}>
                    <Text style={[styles.p,{fontWeight: "bold"}]}> {this.props.contacto.name.last}, {this.props.contacto.name.first} </Text>
                    <Text style={styles.p}> {this.props.contacto.dob.age} Años </Text>
                </View>

                <View style={styles.contenedorBotonesUserCard}>
                    <TouchableOpacity  style={styles.botonVerMas} onPress= { () => this.showModal(this.props.contacto)}> 
                        <View >
                            <Text style={styles.textoVerMas} > Ver mas </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.botonImportar}> 
                        <View >
                            <Text style={styles.textoImportar}> Importar </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <Modal visible= {this.state.showModal} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            {this.state.selectItem && 
                            
                            <>
                            <Text> {this.state.selectItem.name.last} </Text>
                            </>
                            }
                        </View>
                    </View>
                </Modal>
        </View>
    )}
}
