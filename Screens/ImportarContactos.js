import React, { Component } from 'react';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import {styles} from '../src/Styles';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Modal,
    ActivityIndicator,
} from 'react-native';

import {ListadeContactos} from '../Components/ListadeContactos';
import {Header} from '../Components/Header';

import {getAPI} from '../api/RandomUser';
import {storeLocal} from '../api/storeLocal';
import {getLocal} from '../api/getLocal';


export class ImportarContactos extends Component {
    constructor(){
        super();
        this.state = {
            cantHandler: "",
            users: [],
            selectItem: null,
            showModal: false,
            selectedItems: [],
        }
    }

    componentDidMount(){
        getAPI(10)
        .then( (usuarios) => {
            this.setState({users: usuarios, activity: false});
        })
    }

    addContacts = (n) => {
        getAPI(n)
        .then( (usuarios) => {
            usuarios = this.state.users.concat(usuarios)
            this.setState({users: usuarios});
        })
    }

    // selectContact = (key) => {
    //     this.setState({selectedItems: this.selectedItems.push()})
    // }

    deleteContact = (key) => {
        let user = this.state.users.filter((user) => {return user.login.uuid === key})
        getLocal('recycleBin').then((bin) => {
            let deletedUsers = bin.concat(user)
            storeLocal('recycleBin', deletedUsers)
            let users = this.state.users.filter((user) => {return user.login.uuid !== key})
            this.setState({users: users})
        })
    }

    keyExtractor= (item,idx) => idx.toString();
    
    showModal = (key) => {
        let user = this.state.users.filter((user) => { return user.login.uuid === key})
        this.setState({selectItem: user[0]});
        this.setState({showModal: true});
    }

    render() {
        return(
            <View style={{flex:1}}>

            {/* Header de la screen */}
            <Header titulo={"Importar Contactos"} navigation={this.props.navigation}/>
            

            {/* En este input ingresamos cuantos contactos queremos traer de la API */}
            {/* El cant handler se ocupa de pedirle cierta cantidad de usuarios a la api? */}
            <TextInput style={styles.input} placeholder="Ingresar Cantidad" onChangeText={text => this.setState({cantHandler: text})}/>
            {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
            {/* Que seria el cant:?*/}
            <TouchableOpacity  onPress= { () => this.addContacts(this.state.cantHandler)}>
                <View style={styles.boton}>
                    <Text style={styles.botonText}  >Agregar</Text>
                </View>
            </TouchableOpacity>
            
            {/* Esta lista debe mostrar los contactos que traemos de la API */}
            <ListadeContactos titulo={"Contactos encontrados"} usuarios={this.state.users} showModal = {this.showModal}/>
            { this.state.activity &&
            <ActivityIndicator
                    size="large"
                    colo="red"/>
            }
            {/* Esta boton debe guardar los contactos que traemos de la API */}
            <TouchableOpacity  style={styles.botonGuardarContactos} onPress={() => storeLocal('localUsers', this.state.users)}>
                <View >
                    <Text style={styles.botonText}>Guardar contactos</Text>
                </View>
            </TouchableOpacity>

            <Modal visible= {this.state.showModal} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            {this.state.selectItem && 
                            
                            <>

                            <View>
                                <TouchableOpacity onPress={ () => this.setState({showModal:false})}>
                                    <View>
                                        <Text style={styles.h1}> X </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.modalHeader}>
                                <Image style= {styles.modalImage} source={{uri: this.state.selectItem.picture.thumbnail}}/>
                                <View>
                                    <Text style={styles.h1}> {this.state.selectItem.name.last}, {this.state.selectItem.name.first} </Text>
                                    <Text style={styles.h1}> {this.state.selectItem.dob.age} Años </Text>

                                </View>
                            </View>

                            <View style={styles.modalContent}>
                                <Text style={styles.p}>Email: {this.state.selectItem.email}</Text>
                                <Text style={styles.p}>País: {this.state.selectItem.location.country}</Text>
                                <Text style={styles.p}>Ciudad: {this.state.selectItem.location.city}</Text>
                                <Text style={styles.p}>Direccion: {this.state.selectItem.location.street.name}{this.state.selectItem.location.street.number}</Text>
                                <Text style={styles.p}>Codigo postal: {this.state.selectItem.location.postcode}</Text>
                                <Text style={styles.p}>Telefono: {this.state.selectItem.phone}</Text>
                                <Text style={styles.p}>Celular: {this.state.selectItem.cell}</Text>
                            </View>

                            </>
                            }
                        </View>
                    </View>
            </Modal>

        </View>
    )}
}
