import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import {styles} from './util/style';
import * as etiquette from './util/etiquetteCategories';

class Etiquette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    static navigationOptions = {
        title: 'Etiquette'
    }
    render() { 
        const renderDirectoryItem = ({item})=> {
            return (
                <ListItem
                    title={item.category}
                    bottomDivider={true}
                    leftIcon={item.icon}
                    rightIcon={{name:'chevron-right'}}
                    //onPress={() => navigate('category', { id: item.id })}
                />
            );
        };
        return ( 
            <FlatList
                data={etiquette.categories}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
         );
    }
}
 
export default Etiquette;