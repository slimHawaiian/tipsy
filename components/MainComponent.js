import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView,Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Tip from './TipComponent';
import Settings from './SettingsComponent';
import Summary from './SummaryComponent';
import Etiquette from './EtiquetteComponent';
import { Icon } from 'react-native-elements';
import {styles} from './util/style';
import Category from './CategoryComponent';
import TipDetails from './TipDetailsComponent';
import { createStackNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';


  const CustomDrawerContentComponent = props => (
    <ScrollView>
        <View 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}></View> 
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Tipsy</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </View>
    </ScrollView>
);

  const TipNavigator = createStackNavigator(
    {
        Tip: { screen: Tip }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#427314'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='money'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const SettingsNavigator = createStackNavigator(
    {
        Settings: { screen: Settings }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#427314'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='gear'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const EtiquetteNavigator = createStackNavigator(
    {
        Etiquette: { screen: Etiquette,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#427314'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='group'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
            Category:{screen:Category}
    }
);

const SummaryNavigator = createStackNavigator(
    {
        Summary: { screen: Summary,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#427314'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
            TipDetails:{screen:TipDetails}
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Tip: { screen: TipNavigator,
            navigationOptions: {
                drawerLabel: 'Calculate',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='money'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Etiquette: { screen: EtiquetteNavigator,
            navigationOptions: {
                drawerLabel: 'Etiquette',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='group'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Summary: { screen: SummaryNavigator,
            navigationOptions: {
                drawerLabel: 'Summary',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Settings: { screen: SettingsNavigator,
            navigationOptions: {
                drawerLabel: 'Settings',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='gear'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
    },
    {
        initialRouteName:'Tip',
        contentOptions: {
            activeTintColor: '#427314',
            activeBackgroundColor: '#fff',
        },
        contentComponent:CustomDrawerContentComponent
    }
);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator/>
            </View>
        );
    }
}
 
export default Main;