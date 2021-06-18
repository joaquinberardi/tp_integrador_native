// Este componente debera mostrar los contactos que recibe por prop, ya sean de local o la API

import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';

import {styles} from '../src/Styles';


import {getAPI} from '../api/RandomUser';

export class ListadeContactos extends Component {
    constructor(){
        super();
        this.state = {
            users:[],
        }
    }

    componentDidMount(){
        getAPI()
        .then( (usuarios) => {
            this.setState({users: usuarios});
        })
    }


    renderItem =({item}) => {
        return(
        <View>
            <Text> {item.name.last}, {item.name.first} </Text>
        </View>
        )};

    keyExtractor= (item,idx) => idx.toString();

    render() {
        return(
        <View style={styles.listViewContainer}>
            <View >

                <View style={styles.listViewHeader}>
                    <Text style={styles.h1header}> Mis contactos </Text>
                </View>
                <FlatList
                data = { this.state.users }
                keyExtractor= { this.keyExtractor }
                renderItem= { this.renderItem }
                />
            </View>

            {/* <Modal
            visible= {this.state.showModal}
            >
                <View>
                    <Text> MODAL </Text>

                </View>
            </Modal>

            <Button title="Show Modal" onPress={ () => this.setState({showModal: True})}> </Button> */}
        </View>
    )}
}
