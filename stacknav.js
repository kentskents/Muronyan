import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import Entypo from 'react-native-vector-icons/Entypo';
import DetailScreen from './detail';
import MainScreen from './main';


const stackNav = StackNavigator({
    /* 猫の一覧画面 */
    Main: {
        screen: MainScreen,
        navigationOptions:({navigation}) => ({
            title: "むろニャン！",
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Entypo name="menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    /* 猫の詳細画面 */
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "ねこデータ",
        })
    }
})

export default stackNav;
