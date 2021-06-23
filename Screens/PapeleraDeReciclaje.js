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

import {ListadeContactos} from '../Components/ListadeContactos';
import {Header} from '../Components/Header';
import {getLocal} from '../api/getLocal';


export class PapeleraDeReciclaje extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        //getLocal('recycleBin').then((users) => {this.setState({users: users})})
    }

    render() {
        return(
        <View style={{flex:1}}>
            
            <Header titulo={"Papelera de reciclaje"} navigation={this.props.navigation}/>

            <ListadeContactos titulo={"Contactos eliminados"} usuarios={this.state.users} />

            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={() => {getLocal('recycleBin').then((users)=>{this.setState({users: users})})}}>
                <View>
                    <Text style={styles.botonText}>Cargar datos</Text>
                </View>
            </TouchableOpacity>

        </View>
    )}
}
