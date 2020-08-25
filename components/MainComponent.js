import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, ScrollView,Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Tip from './TipComponent';
import Settings from './SettingsComponent';
import Summary from './SummaryComponent';
import Etiquette from './EtiquetteComponent';
import { Icon } from 'react-native-elements';
import { createStackNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
  });

  const TipNavigator = createStackNavigator(
    {
        Tip: { screen: Tip }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
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
        Info: { screen: Settings }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
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
        Info: { screen: Etiquette }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
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
    }
);

const SummaryNavigator = createStackNavigator(
    {
        Summary: { screen: Summary }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
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
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Tip: { screen: TipNavigator,
            navigationOptions: {
                drawerLabel: 'Tip',
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
            activeTintColor: '#5637DD',
        },
        
        //drawerBackgroundColor: '#CEC8FF',
        //contentComponent: CustomDrawerContentComponent
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>NuCamp</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
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