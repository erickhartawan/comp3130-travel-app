import React from 'react';
import { View, SafeAreaView, StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';
import BaseColors from '../config/BaseColors';


function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View style={styles.paddingView}>
                {children}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        // marginTop: Constants.statusBarHeight,
        alignSelf:'stretch',
        padding: 20,
        width:'100%',
        backgroundColor: BaseColors.background,
        overflow: 'visible'
    },
    paddingView:{
        flex:1,
    }
})

export default AppScreen;
