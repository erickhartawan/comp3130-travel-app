import React from 'react'
import { View, Pressable , StyleSheet, Image} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import BaseColors from '../config/BaseColors';
import AppButton from './AppAbsoluteButton';
import AppScreen from './AppScreen';

import AppText from './AppText'

const AppListCard = ({title,subtitle,rating,handlePress,description,onPress, onDelete,onSwipeLeft, onSwipeRight,image}) => {
    
    return (
    <Swipeable
        >
        <Pressable sytle={styles.pressableContainer} onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={{uri: `${image}`}} style={styles.image} />
                    <AppScreen style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                        <AppText style={styles.rating}>{`${rating} out of 10`}</AppText>
                    </AppScreen >
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title='Edit' color={BaseColors.tertiary}/>
                    <AppButton title='Remove' color={BaseColors.tertiary} onPress={()=> onDelete()}/>
                </View>
            </View>
            

        </Pressable>

    </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: BaseColors.secondary,
        color: BaseColors.text,
        padding: 7,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: BaseColors.secondary,
        borderRadius: 10,
        margin: 10,
    },
    innerContainer:{
        flexDirection: 'row',
        backgroundColor: BaseColors.secondary,
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
        backgroundColor:BaseColors.secondary,
        padding:5,
    },
    title:{
        flex: 2,
        color: BaseColors.text,
        flexShrink:1

    },
    subtitle:{
        flex:1,
        color: BaseColors.text,
        flexShrink:1
    },
    rating:{
        flex: 1,
        color: BaseColors.text,
        flexShrink:1
    },
    pressableContainer:{
        backgroundColor: BaseColors.secondary,
        color: BaseColors.text,
        flex: 1,
    },
    image:{
        width:100,
        height:100,
        resizeMode: 'contain'
    }
})


export default AppListCard
