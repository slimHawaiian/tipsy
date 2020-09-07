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

class Summary extends Component {

    static navigationOptions = {
        title: 'Summary'
    }

    findIcon = cat => {
        const category = etiquette.categories.find(x => x.category === cat);
        return category.icon;
    };

    renderDirectoryItem = ({item})=> {
        const localDate = new Date(item.date).toLocaleDateString("en-US");
        const { navigate } = this.props.navigation;
        return (
            <ListItem
                title={`${item.category} - ${localDate}`}
                subtitle = {`Tip: $${item.tip.toFixed(2)} (${item.percentage.toFixed(2) * 100}%) of $${item.total.toFixed(2)}`}
                bottomDivider={true}
                leftIcon={this.findIcon(item.category)}
                rightIcon={{name:'chevron-right'}}
                onPress={() => navigate('TipDetails', { id: item.id })}
            />
        );
    };

    render() { 
        const sortedTips = this.props.tips.sort(function(a, b){return b.id - a.id});
        return (  
            <FlatList
            data={sortedTips}
            renderItem={this.renderDirectoryItem}
            keyExtractor={(item,index) => index.toString()}
        />
        );
    }
}
 
export default connect(mapStateToProps)(Summary);