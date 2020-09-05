import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Alert, ScrollView} from 'react-native';
import {styles} from './util/style';
import {Button,Text} from 'react-native-elements';
import {clearTips} from '../redux/ActionCreators';


const mapDispatchToProps = {
    clearTips: () => (clearTips())
};

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            clearHistoryResult : ""
        }
    }

    static navigationOptions = {
        title: 'Settings'
    }

    clearHistory(){
        Alert.alert('Clear History','You are about to clear your tip history! Continue?',
            [ { text: "Yes", onPress: () => {
                    this.props.clearTips();
                    this.setState({clearHistoryResult:"history cleared!"});
                }
            },
              {text: "No",onPress: () => this.setState({clearHistoryResult:""})}
            ], 
            { cancelable: true }
        );
    }

    render() { 

        return ( 
                <View style={styles.container}>
                    <Text style={styles.textResult}>{this.state.clearHistoryResult}</Text>
                    <Button
                        onPress={() => this.clearHistory()} 
                        buttonStyle={styles.buttonClearHistoryStyle}
                        title='clear tip history'>
                    </Button>
                </View>
        );
    }
}
 
export default connect(null, mapDispatchToProps)(Settings);