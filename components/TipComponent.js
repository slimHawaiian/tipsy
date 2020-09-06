import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text,Picker, ScrollView, TextInput} from 'react-native';
import {styles} from './util/style';
import {ButtonGroup,Button} from 'react-native-elements';
import {addTip} from '../redux/ActionCreators';


const mapDispatchToProps = {
    addTip: (tip) => (addTip(tip))
};

class Tip extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            people:1,
            index:0,
            percentage:.10,
            tip:0.0,
            bill:0.00,
            total:0.00,
            category:2,
            date:''
        }
    }

    static navigationOptions = {
        title: 'Calculate'
    }

    updateSelectedPercentage(index){
            switch(index){
            case 0:
                this.setState({percentage:.10});
                this.setState({index:0});
                break;
            case 1:
                this.setState({percentage:.12});
                this.setState({index:1});
                break;
            case 2:
                this.setState({percentage:.15});
                this.setState({index:2});
                break;
            case 3:
                this.setState({percentage:.20});
                this.setState({index:3});
                break;
        }
    }

    calculateTip(){
        const {bill,percentage,people,category} = this.state;

        const tipAmount = (bill * percentage)/people;
        const totalAmount = (bill + tipAmount)/people;
        this.setState({tip:tipAmount});
        this.setState({total:totalAmount});
        const tip = {
            people,
            percentage,
            tip:tipAmount,
            bill,
            total:totalAmount,
            category,
            date:new Date().toString()};

        this.props.addTip(tip);
    }

    render() { 
        const buttonValues = ['10%', '12%', '15%','20%'];
        const { index,total,tip,people,category} = this.state;

        return ( 
            <ScrollView>
                 <View style={styles.formRow}>
                    <Picker 
                        style={styles.formItem}
                        selectedValue={category}
                        onValueChange={itemValue => this.setState({category: itemValue})} >
                        <Picker.Item label='Select Category' value='0' />
                        <Picker.Item label='Bar' value='Bar' />
                        <Picker.Item label='Hotel' value='Hotel' />
                        <Picker.Item label='Restaurant' value='Restaurant' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Number of People</Text>
                    <Picker 
                        style={styles.formItem}
                        selectedValue={people}
                        onValueChange={itemValue => this.setState({people: itemValue})} >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Bill Amount</Text>
                    <TextInput keyboardType='numeric' placeholder='$0.00' style={styles.billInput}
                               onChangeText={(input) => this.setState({bill: parseFloat(input)})}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Tip</Text>
                    <Text style={styles.formInput}>${tip.toFixed(2)}</Text>
                </View> 
                <View>
                    <ButtonGroup
                        onPress={(i) => this.updateSelectedPercentage(i)}
                        selectedIndex={index}
                        buttons={buttonValues}
                        containerStyle={{height: 25}}
                        selectedButtonStyle={{backgroundColor: "#427314"}}
                    />
                </View>
                <View style={styles.tipRow}>
                    <Text style={styles.tip}>${total.toFixed(2)}</Text>
                </View>

                <View style={styles.tipRow}>
                    <Button onPress={() => this.calculateTip()} 
                        buttonStyle={styles.buttonStyle}
                        title='calculate'>
                    </Button>
                </View>
                
            </ScrollView>
        );
    }
}
 
export default connect(null, mapDispatchToProps)(Tip);