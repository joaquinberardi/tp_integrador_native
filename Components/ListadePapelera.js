// Este componente debera mostrar los contactos que recibe por prop, ya sean de local o la API

import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    Button,
} from 'react-native';

import{UserCard} from './UserCard'
import{BinUserCard} from './BinUserCard'
import {styles} from '../src/Styles';

export class ListadePapelera extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    // showModal = ({item}) => {
    //     this.setState({selectedItem: item, showModal: true})
    // }

    renderItem = ({item}) => {
        return(
            <BinUserCard contacto={item} showModal={this.props.showModal} deleteContact={this.props.deleteContact} recoverContact={this.props.recoverContact} />
        )};

    keyExtractor = (item) => {
        return item.login.uuid
    };

    render() {

        return(
        <View style={styles.listViewContainer}>
            <View >

                <View style={styles.listViewHeader}>
                    <Text style={styles.h1header}> {this.props.titulo} </Text>
                </View>
                <FlatList
                data = { this.props.usuarios }
                keyExtractor= { this.keyExtractor }
                renderItem= { this.renderItem }
                contentContainerStyle= {styles.listContent}
                numColumns= {2}
                />
            </View>
            
        </View>
    )}
}
