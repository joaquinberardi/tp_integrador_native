import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    drawer: {
      backgroundColor: '#FAFAFA',
      width: 300,
   },
    draweritem: {
     //activeTintColor: "#C62828",
     fontSize: 25,
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
      shadowOpacity: 0.3,
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
      shadowOpacity: 0.3,
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
    integrante:{
      fontSize: 25,
      justifyContent: "center",
      textAlign: "center",
      lineHeight: 50,
    },
    p: {
      fontSize: 18,
    },
    h1:{
      fontSize: 30,
      margin: 12,
      fontWeight: "bold"
    },
    header:{
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
      backgroundColor: "#B71C1C",
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 2.22,
      elevation: 3,
    },
    h1header:{
      fontSize: 28,
      margin: 12,
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    burgerButton:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
    },
    IconBurger:{
      height: 45,
      width: 45,
    },
    listViewContainer:{
      margin: 14,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 2.22,
      elevation: 3,
    },
    listViewHeader:{
        paddingHorizontal: 14,
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
        height: 56,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: "#B71C1C",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 2.22,
        elevation: 3,
    },
    listContent:{
      flex:1,
      flexWrap: "wrap",
      flexDirection: "row",
      backgroundColor: "blue",
      justifyContent:'center',
      alignItems:'center',
    },
    listCard:{
      margin:5,
      height: 200,
      width: 165,
      backgroundColor: "red",
      borderRadius: 4,
    },
    listImage:{
      borderTopEndRadius:4,
      borderTopLeftRadius:4,
      width: "100%",
      height: 80,
    }
  });

  export {styles};