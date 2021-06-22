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

import {styles} from '../src/Styles';

export class ListadeContactos extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    // showModal = ({item}) => {
    //     this.setState({selectedItem: item, showModal: true})
    // }

    renderItem =({item}) => {
        return(
            <View>
                <Text> {item.name.last}, {item.name.first} </Text>
            </View>

        )};

    keyExtractor= (item,idx) => (idx.toString());

    render() {
        console.log(this.state.users);

        return(
        <View style={styles.listViewContainer}>
            <View >

                <View style={styles.listViewHeader}>
                    <Text style={styles.h1header}> Mis contactos </Text>
                </View>
                <FlatList
                data = { this.props.usuarios }
                keyExtractor= { this.keyExtractor }
                renderItem= { this.renderItem }
                />
            </View>

            {/* <Modal visible= {this.state.showModal}>
                    <Text> pepe </Text>
            </Modal>
            <TouchableOpacity title="Show Modal" onPress={ () => this.setState({showModal: !this.state.showModal})}> Show Modal </TouchableOpacity>  */}

        </View>
    )}
}
