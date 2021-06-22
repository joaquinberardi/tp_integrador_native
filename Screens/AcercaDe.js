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


export class AcercaDe extends Component {
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
                <Text style= {styles.h1header}> Acerca de </Text>
            </View>

            <View style={styles.listViewContainer}>
                <View style={styles.listViewHeader}> 
                    <Text style={styles.h1header}> Integrantes </Text>
                </View>
                <Text style= {styles.integrante}> Pedro Fraguas </Text>
                <Text style= {styles.integrante}> Benjamin Mackinnon </Text>
                <Text style= {styles.integrante}> Joaquin Berardi </Text>

            </View>
        </View>
    )}
}
