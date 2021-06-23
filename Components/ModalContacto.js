

// Este componente debera mostrar los contactos que recibe por prop, ya sean de local o la API

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,

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
            <Modal visible= {this.props.Modal} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            {this.props.selectItem && 
                            
                            <>

                            <View>
                                <TouchableOpacity onPress={ () => this.props.closeModal()}>
                                    <View>
                                        <Text style={styles.h1}> X </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

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

                            </>
                            }
                        </View>
                    </View>
            </Modal>
    )}
}
