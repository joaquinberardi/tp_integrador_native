import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    FlatList,
    TextInput,
    ScrollView
} from 'react-native';
import { getLocal } from '../api/getLocal';

import {styles} from '../src/Styles';

export class ModalContacto extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentHandler: "",
            comments: [],
            edit: false,

            emailHandler: "",
            countryHandler: "",
            cityHandler: "",
            streetHandler: "",
            numberHandler: "",
            postcodeHandler: "",
            phoneHandler: "",
            cellHandler: "",
        }
    }

    editMode = () => {
        this.setState({edit: true})
        this.setState({
            emailHandler: this.props.selectItem.email,
            countryHandler: this.props.selectItem.location.country,
            cityHandler: this.props.selectItem.location.city,
            streetHandler: this.props.selectItem.location.street.name,
            numberHandler: this.props.selectItem.location.street.number,
            postcodeHandler: this.props.selectItem.location.postcode,
            phoneHandler: this.props.selectItem.phone,
            cellHandler: this.props.selectItem.cell,
        })
    }

    updateInfo = () => {
        let user = this.props.selectItem
        user.email = this.state.emailHandler
        user.location.country = this.state.countryHandler
        user.location.city = this.state.cityHandler
        user.location.street.name = this.state.streetHandler
        user.location.street.number = this.state.numberHandler
        user.location.postcode = this.state.postcodeHandler
        user.cell = this.state.cellHandler
        user.phone = this.state.phoneHandler

        this.props.updateContact(user)
        this.setState({edit: false})
    }

    updateComments = () => {
        getLocal(this.props.selectItem.login.uuid).then(
            (comments)=>{
                this.setState({comments: comments})
            }
        )
    }

    render() {
        if(!this.state.edit){
            if (this.props.allowEdit) {
                return(
                    <Modal visible= {this.props.modal} animationType= {"slide"} >
                            <ScrollView style={styles.modal}>
                                {this.props.selectItem && 
                                
                                <>
                                <View style={[{justifyContent: "space-between"},{display: "flex"},{ flexDirection: "row"}]}>
                                    <TouchableOpacity style={[{alignSelf: 'flex-start'},{marginVertical:15}]} onPress= { () => this.editMode()}>
                                        <View style={styles.textIconContainer}>
                                            <Image style={[styles.icono,{marginRight:10}]} source={require('../src/Icons/Edit.png')}/>
                                            <Text style={styles.closeModal}>Editar</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{alignSelf: 'flex-end'},{marginVertical:15}]} onPress={ () => {this.setState({comments: []}); this.props.closeModal() }}>
                                        <View style={styles.textIconContainer}>
                                            <Text style={styles.closeModal}>Volver</Text>
                                            <Image style={[styles.icono,{marginLeft:10}]} source={require('../src/Icons/Close.png')}/>  
                                        </View>
                                    </TouchableOpacity>
                                </View>
        
        
                                <View style={styles.modalHeader}>
                                    <Image style= {styles.modalImage} source={{uri: this.props.selectItem.picture.thumbnail}}/>
                                    <View>
                                        <Text style={styles.h1}> {this.props.selectItem.name.last}, {this.props.selectItem.name.first} </Text>
                                        <Text style={styles.h1}> {this.props.selectItem.dob.age} A??os </Text>
                                    </View>
                                </View>
        
                                <View style={styles.modalContent}>
                                    <Text style={styles.p}>Email: {this.props.selectItem.email}</Text>
                                    <Text style={styles.p}>Pa??s: {this.props.selectItem.location.country}</Text>
                                    <Text style={styles.p}>Ciudad: {this.props.selectItem.location.city}</Text>
                                    <Text style={styles.p}>Direccion: {this.props.selectItem.location.street.name}{this.props.selectItem.location.street.number}</Text>
                                    <Text style={styles.p}>Codigo postal: {this.props.selectItem.location.postcode}</Text>
                                    <Text style={styles.p}>Telefono: {this.props.selectItem.phone}</Text>
                                    <Text style={styles.p}>Celular: {this.props.selectItem.cell}</Text>
                                </View>
        
                                <View style={{marginBottom:50}}>
                                    <View style={[{display:'flex'},{flexDirection:'row'}, {justifyContent:'space-between'}]}>
                                        <Text style={styles.commentH1}>Comentarios</Text> 
                                        <TouchableOpacity style={{alignSelf: "center"}} onPress={()=>{this.updateComments()}}>
                                            <View  >
                                                <Text style={[{color:"#B71C1C"},{fontWeight:'bold'}]}>Cargar comentarios</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
        
        
                                    <View style={[{display:'flex'},{flexDirection:'row'}, {margin:14}, {justifyContent:"center"},{alignContent:'center'}]}>
                                        <TextInput style={[styles.input,{flex:3},{marginEnd:15}]} placeholder="Ingresar comentario" onChangeText={text => this.setState({commentHandler: text})} />
                                            {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
                                        <TouchableOpacity style={[{alignSelf: 'center'},{elevation:2}]} onPress={()=>{this.props.addComment(this.props.selectItem.login.uuid, this.state.commentHandler)}}>
                                            <View style={styles.boton}>
                                                <Text style={styles.botonText}>Comentar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    {
                                        this.state.comments.map((comment, idx) => {
                                            return <Text key={idx} style={[styles.p,{marginLeft:14},{marginBottom:8}]}>"{comment}"</Text>
                                        })
                                    }
        
                                </View>
        
                                </>
                                }
                            </ScrollView>
                    </Modal>
                )
            } else {
                return(
                    <Modal visible= {this.props.modal} animationType= {"slide"} >
                        <View style={styles.modalContainer}>
                            <ScrollView style={styles.modal}>
                                {this.props.selectItem && 
                                
                                <>
                                <View style={[{justifyContent: "space-between"},{display: "flex"},{ flexDirection: "row"}]}>
                                    <TouchableOpacity style={[{alignSelf: 'flex-end'},{marginVertical:15}]} onPress={ () => {this.setState({comments: []}); this.props.closeModal() }}>
                                        <View style={styles.textIconContainer}>
                                            <Text style={styles.closeModal}>Volver</Text>
                                            <Image style={[styles.icono,{marginLeft:10}]} source={require('../src/Icons/Close.png')}/>  
                                        </View>
                                    </TouchableOpacity>
                                </View>
        
        
                                <View style={styles.modalHeader}>
                                    <Image style= {styles.modalImage} source={{uri: this.props.selectItem.picture.thumbnail}}/>
                                    <View>
                                        <Text style={styles.h1}> {this.props.selectItem.name.last}, {this.props.selectItem.name.first} </Text>
                                        <Text style={styles.h1}> {this.props.selectItem.dob.age} A??os </Text>
                                    </View>
                                </View>
        
                                <View style={styles.modalContent}>
                                    <Text style={styles.p}>Email: {this.props.selectItem.email}</Text>
                                    <Text style={styles.p}>Pa??s: {this.props.selectItem.location.country}</Text>
                                    <Text style={styles.p}>Ciudad: {this.props.selectItem.location.city}</Text>
                                    <Text style={styles.p}>Direccion: {this.props.selectItem.location.street.name}{this.props.selectItem.location.street.number}</Text>
                                    <Text style={styles.p}>Codigo postal: {this.props.selectItem.location.postcode}</Text>
                                    <Text style={styles.p}>Telefono: {this.props.selectItem.phone}</Text>
                                    <Text style={styles.p}>Celular: {this.props.selectItem.cell}</Text>
                                </View>
        
                                <View>
                                    <View style={[{display:'flex'},{flexDirection:'row'}, {justifyContent:'space-between'}]}>
                                        <Text style={styles.commentH1}>Comentarios</Text> 
                                        <TouchableOpacity style={{alignSelf: "center"}} onPress={()=>{this.updateComments()}}>
                                            <View  >
                                                <Text style={[{color:"#B71C1C"},{fontWeight:'bold'}]}>Cargar comentarios</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
        
                                    
                                    <View style={[{display:'flex'},{flexDirection:'row'}, {margin:14}, {justifyContent:"center"},{alignContent:'center'}]}>
                                        <TextInput style={[styles.input,{flex:3},{marginEnd:15}]} placeholder="Ingresar comentario" onChangeText={text => this.setState({commentHandler: text})} />
                                            {/* Este boton guarda la cantidad ingresada y luego ejecuta la funcion */}
                                        <TouchableOpacity style={[{alignSelf: 'center'},{elevation:2}]} onPress={()=>{this.props.addComment(this.props.selectItem.login.uuid, this.state.commentHandler)}}>
                                            <View style={styles.boton}>
                                                <Text style={styles.botonText}>Comentar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    {
                                        this.state.comments.map((comment, idx) => {
                                            return <Text key={idx}>"{comment}"</Text>
                                        })
                                    }
        
                                </View>
        
                                </>
                                }
                            </ScrollView>
                        </View>
                    </Modal>
                )
            }
        } else {
            return(
                <Modal visible= {this.state.edit} animationType= {"slide"} >
                    <View style={styles.modalContainer}>
                        <ScrollView style={styles.modal}>
                            {this.props.selectItem && 
                                
                            <>
                            <View style={[{justifyContent: "space-between"},{display: "flex"},{ flexDirection: "row"}]}>
                                <TouchableOpacity style={[{alignSelf: 'flex-start'},{marginVertical:15}]} onPress={ () => {this.updateInfo()}}>
                                    <View style={styles.textIconContainer}>
                                        <Image style={[styles.icono,{marginRight:10}]} source={require('../src/Icons/Save.png')}/>
                                        <Text style={styles.closeModal}>Guardar</Text>
                                    </View>
                                </TouchableOpacity>
                                    <TouchableOpacity style={[{alignSelf: 'flex-end'},{marginVertical:15}]} onPress={ () => {this.setState({edit: false})}}>
                                    <View style={styles.textIconContainer}>
                                        <Text style={styles.closeModal}>Volver</Text>
                                        <Image style={[styles.icono,{marginLeft:10}]} source={require('../src/Icons/Close.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.modalHeader}>
                                <Image style= {styles.modalImage} source={{uri: this.props.selectItem.picture.thumbnail}}/>
                                <View>
                                    <Text style={styles.h1}> {this.props.selectItem.name.last}, {this.props.selectItem.name.first} </Text>
                                    <Text style={styles.h1}> {this.props.selectItem.dob.age} A??os </Text>

                                </View>
                            </View>

                            <View style={styles.modalContent}>
                                <TextInput style={styles.input} defaultValue={ this.props.selectItem.email} onChangeText={text => this.setState({emailHandler: text})} />
                                <TextInput style={styles.input} defaultValue={ this.props.selectItem.location.country } onChangeText={text => this.setState({countryHandler: text})} />
                                <TextInput style={styles.input} defaultValue={this.props.selectItem.location.city } onChangeText={text => this.setState({cityHandler: text})} />
                                <TextInput style={styles.input} defaultValue={ this.props.selectItem.location.street.name } onChangeText={text => this.setState({streetHandler: text})}/>
                                <TextInput style={styles.input} defaultValue={ this.props.selectItem.location.street.number} onChangeText={text => this.setState({numberHandler: text})}/>
                                <TextInput style={styles.input} defaultValue={this.props.selectItem.location.postcode} onChangeText={text => this.setState({postcodeHandler: text})}/>
                                <TextInput style={styles.input} defaultValue={this.props.selectItem.phone} onChangeText={text => this.setState({phoneHandler: text})}/>
                                <TextInput style={styles.input} defaultValue={this.props.selectItem.cell} onChangeText={text => this.setState({cellHandler: text})}/>
                            </View>
                                
                            </>
                            }
                        </ScrollView>
                    </View>
                </Modal>
            )
        }
    }
}
