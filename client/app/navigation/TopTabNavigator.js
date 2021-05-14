import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import BaseColors from '../config/BaseColors';
import MyList from '../screens/MyList'
import ExploreScreen from '../screens/ExploreScreen'
import SettingScreen from '../screens/SettingScreen'
import CategoryNavigator from './CategoryNavigator';

const Tab = createMaterialTopTabNavigator();


const TopTabNavigator = () => (
    <Tab.Navigator tabBaroptions={{activeTintColor:BaseColors.secondary, activeBackgroundColor: BaseColors.primary }}>
        <Tab.Screen name='MyList' component={MyList} options={{title:'My Account'}}/>
        <Tab.Screen name='ExploreScreen' component={ExploreScreen} />
        <Tab.Screen name='SettingScreen' component={SettingScreen} />
    </Tab.Navigator>
)

export default TopTabNavigator