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

export class PapeleraDeReciclaje extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render() {
        return(
        <View>
            
            <View style= {styles.header}>
                <View style={styles.burgerButton}>
                    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer()}>
                                <Image style={styles.IconBurger} source={require('../src/Icons/BurgerIcon.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style= {styles.h1header}> Papelera de reciclaje </Text>
            </View>

        </View>
    )}
}
