import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';

import{UserCard} from './UserCard'
import {styles} from '../src/Styles';

export class ListadeContactos extends Component {
    
    renderItem = ({item}) => {
        return(
        <UserCard contacto={item} bin={this.props.bin} showModal={this.props.showModal} deleteContact={this.props.deleteContact} recoverContact={this.props.recoverContact}/>
        )
    }

    keyExtractor = (item) => {
        return item.login.uuid
    }

    render() {
        return(
        <View style={styles.listViewContainer}>
            <View >
                <View style={styles.listViewHeader}>
                    <Text style={styles.h1header}> {this.props.titulo} </Text>
                </View>
                <FlatList
                data = { this.props.usuarios }
                keyExtractor= { this.keyExtractor }
                renderItem= { this.renderItem }
                contentContainerStyle= {styles.listContent}
                numColumns= {2}
                />
            </View>
        </View>
        )
    }
}
