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
      margin: 14,
      lineHeight: 16,
      borderRadius: 4,
      padding: 12,
      flex: 1,
      justifyContent: "center",
      textAlign: "center",
      fontSize: 16,
      includeFontPadding: false,
      color: "#808080",
      shadowColor: "#000",
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    boton: {
      flex:1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#961515",
      borderRadius: 4,
      marginHorizontal: 14,
      paddingVertical: 16,
      shadowColor: "#000",
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    botonText:{
      flex: 1,
      justifyContent: "center",
      textAlign: "center",
      fontSize: 18,
      includeFontPadding: false,
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    p: {
      fontSize: 18,
    },
    h1:{
      fontSize: 30,
      margin: 12,
      fontWeight: "bold"},
    header:{
      paddingHorizontal: 14,
      flex: 1,
      flexDirection: "row",
      height: 56,
      backgroundColor: "#B71C1C",
      shadowColor: "#000",
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    h1header:{
      fontSize: 30,
      margin: 12,
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    burgerContainer:{

    },
    burgerIcon:{
      height: 30,
    }
  });

  export {styles};