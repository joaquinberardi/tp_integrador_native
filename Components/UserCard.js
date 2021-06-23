

// Este componente debera mostrar en formato card el detalle del contacto

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native';

import {styles} from '../src/Styles';

export class UserCard extends Component {
    constructor(){
        super();
        this.state = {
        };
    }

    render() {
        return(
        <View style={styles.listCard}>

                <Image style= {styles.listImage} source={{uri: this.props.contacto.picture.thumbnail}}/>
               
                <View style={styles.contenedorDetallesUserCard}>
                    <Text style={[styles.p,{fontWeight: "bold"}]}> {this.props.contacto.name.last}, {this.props.contacto.name.first} </Text>
                    <Text style={styles.p}> {this.props.contacto.dob.age} Años </Text>
                </View>

                <View style={styles.contenedorBotonesUserCard}>
                    <TouchableOpacity  style={styles.botonVerMas}> 
                        <View >
                            <Text style={styles.textoVerMas}> Ver mas </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.botonImportar}> 
                        <View >
                            <Text style={styles.textoImportar}> Importar </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
        </View>
    )}
}
