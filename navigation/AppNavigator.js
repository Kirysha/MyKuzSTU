import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { createDrawerNavigator } from 'react-navigation';

import LinksScreen from '../screens/LinksScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                //source={require('./chats-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Links')}
                title="Go to notifications"
            />
        );
    }
}

class MyLinksScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Links',
        drawerIcon: ({ tintColor }) => (
            <Image
                //source={require('./notif-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
class MySettingsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
            <Image
                //source={require('./chats-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Settings')}
                title="Go to notifications"
            />
        );
    }
}


export default createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Links: {
        screen: LinksScreen,
    },
    Settings: {
        screen: SettingsScreen,
    },
});