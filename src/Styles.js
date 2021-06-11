import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    view: {
      margin: 12,
      marginTop: 24,
    },
    drawer: {
      backgroundColor: '#FAFAFA',
      width: 300,
   },
    draweritem: {
     //activeTintColor: "#C62828",
     fontSize: 30,
     //labelStyle: {fontSize:30, fontWeight: 'bold'},
   },
    input: {
      height: 40,
      margin: 14,
      borderWidth: 1,
      borderRadius: 4,
      padding: 12,
    },
    boton: {
      height: 40,
      margin: 14,
      backgroundColor: "#20b2aa",
      borderRadius: 4,
    },
    botonText:{
      textAlign: 'center',
      fontSize: 20,
      padding: 3,
    },
    botonDanger:{
      height: 40,
      margin: 14,
      backgroundColor: "#dc143c",
      borderRadius: 4,
    },
    p: {
      fontSize: 18,
    },
    h1:{
      fontSize: 30,
      margin: 12,
      fontWeight: "bold"}
  });

  export {styles};