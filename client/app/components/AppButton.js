import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';


import BaseColors from '../config/BaseColors';


function AppButton({style, title, textStyle ,color="primary", onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button,{backgroundColor:BaseColors[color]},style]}>
                <Text style={[styles.text,textStyle]}> {title}  </Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: BaseColors.primary,
        borderRadius: 20,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: BaseColors.text,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AppButton;
