import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    Button,
} from 'react-native';

export class Screen_ContactosAPI extends Component {
    constructor(){
        super();
        this.state = {
            activity: false
        }
    }

    render() {
        return(
        <View>
            <Text>Hola</Text>
            <View style={{height:100}}>
                {this.state.activity &&
                <ActivityIndicator
                    size="large"
                    colo="red"
                    animating={this.state.activity}/>
                }
            </View>
            <Button title="activity indicator" onPress={ () => this.setState }/> 
        </View>
    )}
}
