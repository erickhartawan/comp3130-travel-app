import React from 'react'
import { View, Text, StyleSheet,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import BaseColors from '../config/BaseColors'
import AppButton from './AppButton'
import AppScreen from './AppScreen'
import AppText from './AppText'


const AppDetailPage = ({image,title, subtitle,rating,description}) => {
const navigation = useNavigation();
    return (
        <AppScreen  style={styles.container}>
            <Image source={image} style={styles.image} />
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
            <AppButton title='Add to My List' color={BaseColors.tertiary}/>
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
