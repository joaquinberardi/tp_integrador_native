import React, { Component } from 'react';
import {styles} from '../src/Styles';
import {Header} from '../Components/Header'

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
            
            {/* Header de la screen */}
            <Header titulo={"Acerca de"} navigation={this.props.navigation}/>

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
