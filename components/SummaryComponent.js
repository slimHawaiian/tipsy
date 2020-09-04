import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {styles} from './util/style';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        tips: state.tip.tips,
    };
};

class Summary extends Component {

    static navigationOptions = {
        title: 'Summary'
    }

    showText(text,index){
        return <Text key={index}>${text.toFixed(2)}</Text>
    }

    render() { 
        return (  
            <View style={styles.container}>
                {this.props.tips.map((x,i) => this.showText(x.total,i))}
            </View>
        );
    }
}
 
export default connect(mapStateToProps)(Summary);