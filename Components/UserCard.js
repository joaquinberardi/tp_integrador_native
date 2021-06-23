

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
                <Text> {this.props.contacto.name.last}, {this.props.contacto.name.first} </Text>
                <Text> {this.props.contacto.dob.age}</Text>
        </View>
    )}
}
