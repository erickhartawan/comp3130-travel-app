import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import BaseColors from "../config/BaseColors"

function AppIcon({name, size=40,iconColor="#3500D3"}){
    return(
        <View style={{width:size,height:size,borderRadius: size/2, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor} />
        </View>
    )
}


const styles = StyleSheet.create({
    
})

export default AppIcon;