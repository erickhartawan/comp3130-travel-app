import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View} from 'react-native';


import BaseColors from '../config/BaseColors';


function AppButton({title, color="primary", onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button,{backgroundColor:BaseColors[color]}]}>
                <Text style={styles.text}> {title}  </Text>
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
        color: BaseColors.tertiary,
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default AppButton;
