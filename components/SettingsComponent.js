import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions = {
        title: 'Settings'
    }
    render() { 
        return (  
            <View>
            <Text>Settings Section</Text>
        </View>
        );
    }
}
 
export default Info;