import React, { Component } from 'react';
import {FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as etiquette from './util/etiquetteCategories';

class Etiquette extends Component {
   
    static navigationOptions = {
        title: 'Etiquette'
    }
    
    render() { 
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item})=> {
            return (
                <ListItem
                    title={item.category}
                    bottomDivider={true}
                    leftIcon={item.icon}
                    rightIcon={{name:'chevron-right'}}
                    onPress={() => navigate('Category', { Id: item.id ,Title:`${item.category} Etiquette`})}
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