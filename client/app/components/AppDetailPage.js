import React from 'react'
import { View, Text, StyleSheet,Image, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import BaseColors from '../config/BaseColors'
import AppButton from './AppAbsoluteButton'
import AppScreen from './AppScreen'
import AppText from './AppText'
import axios from 'axios';
import uuid from 'react-native-uuid';


const AppDetailPage = ({image,title, subtitle,rating,state,description}) => {
    const navigation = useNavigation();


    const addToMyList = () => {
        axios.post('https://travel-server-erick.herokuapp.com/api/userlist',{
            id: Math.floor(Math.random() * 1000000),
            title: title,
            subtitle: subtitle,
            rating: rating,
            image: image,
            state:state,
            description: description
        }).then(res => {
            console.log('successfully added item to myList');
            console.log(res.data)
            Alert.alert("Data has been added to your list")
        })
    }
    return (
        <AppScreen  style={styles.container}>
            <Image source={{uri: `${image}`}} style={styles.image} />
            <AppScreen  style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
                <AppText style={styles.rating}>{rating}</AppText>
            </AppScreen >
            <AppScreen style={styles.descriptionContainer}>
                <AppText >
                    {description}
                </AppText>
            </AppScreen>
        
        <View style={styles.buttonContainer}>
            <AppButton title='Add to My List' onPress={addToMyList} color={BaseColors.tertiary}/>
            <AppButton title='Back' color={BaseColors.tertiary} onPress={()=> navigation.goBack()}/>
        </View>
            </AppScreen >
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: BaseColors.primary,
        color: BaseColors.text,
        padding: 7,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: BaseColors.secondary,
        borderRadius: 10,
        margin: 10,
        alignItems:'center',
        alignContent:'center'
    },
    innerContainer:{
        flexDirection: 'row',
        backgroundColor: BaseColors.primary,
        color: BaseColors.text,
        flex:1
    },
    buttonContainer:{
        alignContent:'center',
        justifyContent:'center',
        padding:5,
        flexDirection: 'row'
    },
    textContainer:{
        flexDirection:'column',
        backgroundColor:BaseColors.primary,
        padding:5,
        alignContent:'center',
        justifyContent:'center',
    },
    title:{
        flex: 2,
        color: BaseColors.text,
        flexShrink:1,
        fontSize: 24,
        alignContent:'center',
        justifyContent:'center',
    },
    subtitle:{
        flex:1,
        color: BaseColors.text,
        flexShrink:1,
        alignContent:'center',
        justifyContent:'center',
    },
    rating:{
        flex: 1,
        color: BaseColors.text,
        flexShrink:1,
        alignContent:'center',
        justifyContent:'center',
    },
    pressableContainer:{
        backgroundColor: BaseColors.primary,
        color: BaseColors.text,
        flex: 1,
    },
    image:{
        height:150,
        width:150,
        resizeMode: 'contain',
        flex: 2
    },
    descriptionContainer:{
        backgroundColor: BaseColors.primary,
        color: BaseColors.text,
    }
})

export default AppDetailPage
