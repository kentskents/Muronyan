import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import tabNav from './tabnav';


const drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "メニュー",
            drawerIcon: ({ tintColor }) => <Feather name="arrow-left" size={24} />
        },
    }
});

AppRegistry.registerComponent('Tour2017', () => drawernav);
