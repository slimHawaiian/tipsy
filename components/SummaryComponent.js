import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
            <View>
                <Text>Summary Section</Text>
            </View>
        );
    }
}
 
export default Summary;