import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import {styles} from '../src/Styles';

export class Header extends Component {
    render() {
        return(
        <View style= {styles.header}>
            <View style={styles.burgerButton}>
                <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                    <Image style={styles.IconBurger} source={require('../src/Icons/Menu.png')}/>
                </TouchableOpacity>
            </View>
            <Text style = {styles.h1header}> {this.props.titulo} </Text>
        </View>
    )}
}
