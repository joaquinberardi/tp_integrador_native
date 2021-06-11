import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Modal,
    Button,
} from 'react-native';
import {getData} from '../api/RandomUser';

export class Screen_1 extends Component {
    constructor(){
        super();
        this.state = {
            users:[],
            showModal: false
        }
    }

    
    render() {
        return(
        <View>
            <View>
                <Text> Screen 1 </Text>
            </View>
        </View>
    )}
}
