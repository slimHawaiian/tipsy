import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './util/style';

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
            <View style={styles.container}>
            <Text>Settings Section</Text>
        </View>
        );
    }
}
 
export default Info;