import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import TopTabNavigator from './TopTabNavigator';


const AppStack = createStackNavigator();

const StackNavigator =() => (
    <AppStack.Navigator>
        <AppStack.Screen name="welcome" component={SplashScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Home" component={TopTabNavigator} />

    </AppStack.Navigator>
)

export default StackNavigator