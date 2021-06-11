import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Modal,
    Button,
} from 'react-native';

import {styles} from '../src/Styles';


import {getData} from '../api/RandomUser';

export class Screen_Inicio extends Component {
    constructor(){
        super();
        this.state = {
            users:[],
            showModal: false
        }
    }

    componentDidMount(){
        getData()
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
        <View>
            <View>
                <Text style= {styles.h1}> Mis contactos </Text>
            </View>

            <FlatList
            data = { this.state.users }
            keyExtractor= { this.keyExtractor }
            renderItem= { this.renderItem }
            />

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
