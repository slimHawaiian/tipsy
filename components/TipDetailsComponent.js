import React, { Component} from 'react';
import {Text} from 'react-native';
import {Card} from 'react-native-elements';
import { connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        tips: state.tip.tips,
    };
};

class TipDetails extends Component {

    static navigationOptions =({navigation}) =>  {
        return {
            title: 'Tip Details',
            headerStyle: {
                backgroundColor: '#427314',
            },
            headerTitleStyle: {
                color:'#fff',
              },
        }
    };
    
    render() { 
        const id = this.props.navigation.getParam('id');
        const tip = this.props.tips.find(x => x.id === id);
        const localDate = new Date(tip.date).toLocaleDateString("en-US");
        return (  
           <Card title={`${tip.category} - ${localDate}`}>
                <Text>Bill Amount: ${tip.bill.toFixed(2)}</Text>
                <Text>Tip: ${tip.tip.toFixed(2)}</Text>
                <Text>Tip Percentage: {tip.percentage.toFixed(2) * 100}%</Text>
                <Text>Total: ${tip.total.toFixed(2)}</Text>
           </Card>
        );
    }
}

export default connect(mapStateToProps)(TipDetails);