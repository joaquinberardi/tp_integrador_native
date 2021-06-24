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
    ScrollView,
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

            <ScrollView>
                <ListadeContactos titulo={"Contactos eliminados"} usuarios={this.state.users}  showModal = {this.showModal}/>
            </ScrollView>
            
            <ModalContacto selectItem={this.state.selectItem} Modal={this.state.Modal} closeModal={this.closeModal} />

            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <View style={[{backgroundColor:"transparent"},{position:"absolute"},{bottom:10},{alignSelf: "center"}]}>
                <TouchableOpacity  style={[styles.botonGuardarContactos,{justifyContent:"flex-end"}]} onPress={() => {getLocal('recycleBin').then((users)=>{this.setState({users: users})})}}>
                        <View style={styles.textIconContainer}>
                            <Text style={[{alignSelf: 'center'}, {justifyContent: 'center'},styles.botonText]}>Cargar contactos</Text>
                            <Image style={styles.icono} source={require('../src/Icons/Synchronize.png')}/>
                        </View>
                </TouchableOpacity>
            </View>


        </View>
    )}
}
