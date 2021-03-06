import React from 'react';
import { Text, StyleSheet, View, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'

import BaseColors from '../config/BaseColors';


function AppButton({style, title, textStyle ,color="primary", onPress}) {
    return (
        <TouchableOpacity style={[styles.buttonContainer,style]} onPress={onPress}>
            <View style={[styles.button,{backgroundColor:BaseColors[color]},style]}>
                <Text style={[styles.text,textStyle]}> {title}  </Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        marginBottom:10,
        zIndex: 18
    },
    button:{
        backgroundColor: BaseColors.primary,
        borderRadius: 20,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    text:{
        color: BaseColors.text,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AppButton;
