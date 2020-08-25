import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Tip extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions = {
        title: 'Tip'
    }
    render() { 

        
        return (  
            <View>
                <Text>Tip Section</Text>
            </View>
        );
    }
}
 
export default Tip;