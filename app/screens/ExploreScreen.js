import React from 'react'
import { View, Text, AppState } from 'react-native'
import AppButton from '../components/AppButton'

import AppScreen from '../components/AppScreen'


const ExploreScreen = ({navigation}) => {
    return (
        <AppScreen>
            <AppButton title='Explore more cities' onPress={() => navigation.navigate("ALL")}/>
        </AppScreen>
    )
}

export default ExploreScreen
