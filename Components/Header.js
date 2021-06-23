

// Este componente debera mostrar los contactos que recibe por prop, ya sean de local o la API

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native';

import {styles} from '../src/Styles';

export class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo: props.titulo,
        };
    }

    render() {
        console.log(this.state.users);

        return(
        <View style= {styles.header}>
                <View style={styles.burgerButton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                                <Image style={styles.IconBurger} source={require('../src/Icons/BurgerIcon.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style= {styles.h1header}> {this.props.titulo}</Text>
        </View>
    )}
}
