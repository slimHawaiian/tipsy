
import {StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      drawerHeader: {
          backgroundColor: '#427314',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          flexDirection: 'row'
      },
      drawerHeaderText: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
      },
      drawerImage: {
          margin: 10,
          height: 60,
          width: 60
      },
      stackIcon: {
          marginLeft: 10,
          color: '#fff',
          fontSize: 24
      },
    formRow: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        margin: 8
    },
    formLabel: {
        fontSize: 15,
        flex: 1
    },
    formItem: {
        flex: 1
    },
    formInput:{
        flex:1,
        fontSize:15
    },
    billInput:{
        flex:1,
        fontSize:18,
        height: 40, 
        width:20,
        borderColor: '#427314', 
        borderWidth: 1,
        padding:2
    },
    tip:{
        fontSize:75
    },
    tipRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    buttonStyle:{
       
        backgroundColor: '#427314', 
        height:70,
        width:140
    },
    bgcolor:{backgroundColor:'#427314'}
    
});