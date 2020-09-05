import React, { Component } from 'react';
import {FlatList } from 'react-native';
import {ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import * as etiquette from './util/etiquetteCategories';

const mapStateToProps = state => {
    return {
        tips: state.tip.tips,
    };
};

const findIcon = cat => {
    const category = etiquette.categories.find(x => x.category === cat);
    return category.icon;
};

const renderDirectoryItem = ({item})=> {
    const localDate = new Date(item.date).toLocaleDateString("en-US");
    return (
        <ListItem
            title={`${item.category} - ${localDate}`}
            subtitle = {`Total: $${item.total.toFixed(2)}`}
            bottomDivider={true}
            leftIcon={findIcon(item.category)}
            rightIcon={{name:'chevron-right'}}
        />
    );
};

class Summary extends Component {

    static navigationOptions = {
        title: 'Summary'
    }

    render() { 
        return (  
            <FlatList
            data={this.props.tips}
            renderItem={renderDirectoryItem}
            keyExtractor={(item,index) => index.toString()}
        />
        );
    }
}
 
export default connect(mapStateToProps)(Summary);