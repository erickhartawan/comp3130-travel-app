import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import BaseColors from '../config/BaseColors';
import MyList from '../screens/MyList'
import SettingScreen from '../screens/SettingScreen'
import Listing from '../screens/Listing';


const Category = createMaterialTopTabNavigator();


const CategoryNavigator = () => (
    <Category.Navigator tabBaroptions={{activeTintColor:BaseColors.secondary, activeBackgroundColor: BaseColors.primary }}>
        <Category.Screen 
            name='ALL' 
            children={() =><Listing category='ALL'/>}
        />
        <Category.Screen 
            name='TAS' 
            children={() =><Listing category='TAS'/>}
        />
        <Category.Screen 
            name='NSW' 
            children={() =><Listing category='NSW'/>}
        />
        <Category.Screen 
            name='VIC' 
            children={() =><Listing category='VIC'/>}
        />
        <Category.Screen 
            name='QLD' 
            children={() =><Listing category='QLD'/>}
        />
        <Category.Screen 
            name='NT' 
            children={() =><Listing category='NT'/>}
        />

    </Category.Navigator>
)

export default CategoryNavigator