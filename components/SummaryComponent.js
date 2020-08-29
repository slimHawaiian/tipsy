import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './util/style';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    static navigationOptions = {
        title: 'Summary'
    }

    render() { 
        return (  
            <View style={styles.container}>
                <Text>Summary Section</Text>
            </View>
        );
    }
}
 
export default Summary;