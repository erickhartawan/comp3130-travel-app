import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import BaseColors from '../config/BaseColors';
import MyList from '../screens/MyList'
import SavedScreen from '../screens/SavedScreen'
import SettingScreen from '../screens/SettingScreen'

const Tab = createMaterialTopTabNavigator();


const TopTabNavigator = () => (
    <Tab.Navigator tabBaroptions={{activeTintColor:BaseColors.secondary, activeBackgroundColor: BaseColors.primary }}>
        <Tab.Screen name='MyList' component={MyList} />
        <Tab.Screen name='SavedScreen' component={SavedScreen} />
        <Tab.Screen name='SettingScreen' component={SettingScreen} />
    </Tab.Navigator>
)

export default TopTabNavigator