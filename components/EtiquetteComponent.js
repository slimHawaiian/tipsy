import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './util/style';

class Etiquette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions = {
        title: 'Etiquette'
    }
    render() { 
        return ( 
            <View style={styles.container}>
            <Text>Etiquette Section</Text>
        </View>

         );
    }
}
 
export default Etiquette;