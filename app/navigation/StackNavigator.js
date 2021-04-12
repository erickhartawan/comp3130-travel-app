import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import TopTabNavigator from './TopTabNavigator';
import CategoryNavigator from './CategoryNavigator'
import MyList from '../screens/MyList';
import AppHeader from '../components/AppHeader';
import BaseColors from '../config/BaseColors';
import TravelDetail from '../screens/TravelDetail';
import Listing from '../screens/Listing';

const AppStack = createStackNavigator();

const StackNavigator =() => (
    <AppStack.Navigator>
        <AppStack.Screen name="welcome" component={SplashScreen} options={{headerShown:false,headerStyle:{backgroundColor:BaseColors.secondary}}}/>
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerStyle:{backgroundColor:BaseColors.primary}}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerStyle:{backgroundColor:BaseColors.primary},headerTitleStyle:{color:BaseColors.text}}}/>
        <AppStack.Screen name="ALL" component={CategoryNavigator} options={{ headerTitle: props => <AppHeader {...props} /> }} />
        <AppStack.Screen name="MyList" component={TopTabNavigator} options={{headerStyle:{backgroundColor:BaseColors.primary},headerTitleStyle:{color:BaseColors.text}}}/>
        <AppStack.Screen name="Details" component={TravelDetail} />

    </AppStack.Navigator>
)

export default StackNavigator