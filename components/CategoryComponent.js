import React, { Component } from 'react';
import {FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as etiquette from './util/etiquetteCategories';

class Category extends Component {
  
    static navigationOptions =({navigation}) =>  {
        return {
            title: navigation.getParam('Title'),
            headerStyle: {
                backgroundColor: '#427314',
            },
            headerTitleStyle: {
                color:'#fff',
              },
        }
    };

    render() { 
        const id = this.props.navigation.getParam('Id');
        const rules = etiquette.rules.filter(x => x.id === id);
        const renderRules = ({item})=> {
            return (
                <ListItem
                    title={item.rule}
                    bottomDivider={true}
                />
            );
        };
        return ( 
            <FlatList
                data={rules}
                renderItem={renderRules}
                keyExtractor={(item,index) => index.toString()}
            />
         );
    }
}
 
export default Category;