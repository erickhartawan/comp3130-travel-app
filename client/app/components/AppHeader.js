import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import BaseColors from '../config/BaseColors'
import AppButton from './AppButton'

const AppHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <AppButton textStyle={styles.textStyle} style={styles.headerButton} title="a" />
            <AppButton textStyle={styles.textStyle} style={styles.headerButton} title="b" />
            <AppButton textStyle={styles.textStyle} style={styles.headerButton} title='My List' onPress={() => navigation.navigate("MyList") } />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 5
    },
    headerButton:{
        backgroundColor:'#FFF'
    },

    textStyle:{
        color: BaseColors.primary
    }
})

export default AppHeader
