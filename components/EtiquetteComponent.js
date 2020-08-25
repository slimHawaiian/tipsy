import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
            <View>
            <Text>Etiquette Section</Text>
        </View>

         );
    }
}
 
export default Etiquette;