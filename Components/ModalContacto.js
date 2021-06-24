

// Este componente debera mostrar los contactos que recibe por prop, ya sean de local o la API

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    FlatList,
    TextInput,

} from 'react-native';

import {styles} from '../src/Styles';

export class ModalContacto extends Component {
    constructor(props){
        super(props);
        this.state = {
    }
    }

    render() {
        return(
            <Modal visible= {this.props.Modal} animationType= {"slide"} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            {this.props.selectItem && 
                            
                            <>

                            <TouchableOpacity style={[{alignSelf: 'flex-end'},{margin:15}]}onPress={ () => this.props.closeModal()}>
                                    <View >
                                        <Text style={styles.closeModal}>Volver</Text>
                                    </View>
                            </TouchableOpacity>

                            <View style={styles.modalHeader}>
                                <Image style= {styles.modalImage} source={{uri: this.props.selectItem.picture.thumbnail}}/>
                                <View>
                                    <Text style={styles.h1}> {this.props.selectItem.name.last}, {this.props.selectItem.name.first} </Text>
                                    <Text style={styles.h1}> {this.props.selectItem.dob.age} Años </Text>

                                </View>
                            </View>

                            <View style={styles.modalContent}>
                                <Text style={styles.p}>Email: {this.props.selectItem.email}</Text>
                                <Text style={styles.p}>País: {this.props.selectItem.location.country}</Text>
                                <Text style={styles.p}>Ciudad: {this.props.selectItem.location.city}</Text>
                                <Text style={styles.p}>Direccion: {this.props.selectItem.location.street.name}{this.props.selectItem.location.street.number}</Text>
                                <Text style={styles.p}>Codigo postal: {this.props.selectItem.location.postcode}</Text>
                                <Text style={styles.p}>Telefono: {this.props.selectItem.phone}</Text>
                                <Text style={styles.p}>Celular: {this.props.selectItem.cell}</Text>
                            </View>

                            <View>
                               <Text style={styles.commentH1}>Comentarios</Text> 

                               <View style={[{display:'flex'},{flexDirection:'row'}, {margin:14}, {justifyContent:"center"},{alignContent:'center'}]}>
                                    <TextInput style={[styles.input,{flex:3},{marginEnd:15}]} placeholder="Ingresar comentario" />
                                    {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
                                    <TouchableOpacity style={[{alignSelf: 'center'},{elevation:2}]}>
                                        <View style={styles.boton}>
                                            <Text style={styles.botonText}>Comentar</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
                                
                            
                            {/* <FlatList
                                data = { this.props.comentarios }
                                keyExtractor= { this.keyExtractor }
                                renderItem= { this.renderItem }
                                contentContainerStyle= {styles.listComments}
                            /> */}
                            </View>


                            </>
                            }
                        </View>
                    </View>
            </Modal>
    )}
}
