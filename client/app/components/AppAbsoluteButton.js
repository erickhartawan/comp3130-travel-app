import React from 'react';
import { Text, StyleSheet, View, Pressable} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler"


import BaseColors from '../config/BaseColors';


function AppAbsoluteButton({containerStyle,style, title, textStyle ,color="primary", onPress}) {
    return (
        <TouchableOpacity containerStyle={containerStyle} onPress={onPress}>
            <View style={[styles.button,{backgroundColor:BaseColors[color]},style]}>
                <Text style={[styles.text,textStyle]}> {title}  </Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: BaseColors.tertiary,
        borderRadius: 20,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible'

    },
    text:{
        color: BaseColors.text,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AppAbsoluteButton;
