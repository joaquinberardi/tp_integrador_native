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
import {ModalContacto} from '../Components/ModalContacto';


export class PapeleraDeReciclaje extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            selectItem: null,
            Modal: false,
        }
    }

    componentDidMount(){
        //getLocal('recycleBin').then((users) => {this.setState({users: users})})
    }

    showModal = (key) => {
        let user = this.state.users.filter((user) => { return user.login.uuid === key})
        this.setState({selectItem: user[0]});
        this.setState({Modal: true});
    }

    closeModal = () => {
        this.setState({Modal: false})
    }


    render() {
        return(
        <View style={{flex:1}}>
            
            <Header titulo={"Papelera de reciclaje"} navigation={this.props.navigation}/>

            <ListadeContactos titulo={"Contactos eliminados"} usuarios={this.state.users}  showModal = {this.showModal}/>
            <ModalContacto selectItem={this.state.selectItem} Modal={this.state.Modal} closeModal={this.closeModal} />

            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={() => {getLocal('recycleBin').then((users)=>{this.setState({users: users})})}}>
                <View>
                    <Text style={styles.botonText}>Cargar datos</Text>
                </View>
            </TouchableOpacity>


        </View>
    )}
}
