import React from 'react'
import { View, Text } from 'react-native'


import AppButton from '../components/AppButton'
import AppScreen from '../components/AppScreen'

const SettingScreen = ({navigation}) => {
    return (
        <AppScreen>
            <AppButton title="Log off" onPress={() => navigation.navigate("Login")}/>
        </AppScreen>
    )
}

export default SettingScreen
