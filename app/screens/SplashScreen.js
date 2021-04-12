import React from 'react'
import { View, Text,Image,StyleSheet} from 'react-native'
import AppButton from '../components/AppButton'
import AppIcon from '../components/AppIcon'
import AppScreen from '../components/AppScreen'
import AppText from '../components/AppText'
import BaseColors from '../config/BaseColors'

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate("Register")
    }, 2000);
    return (
        <AppScreen>
            <Image 
            style={styles.logo}
            source={require('./../../assets/newLogo.png')}
            />
            <AppText style={styles.version}>
                v.0.0.1
            </AppText>
            <AppText style={styles.message}>
                You will be redirected to Register page in 2s
            </AppText>
            <AppButton title='not redirected? click here instead' onPress={() => navigation.navigate("Register")}></AppButton>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    logo:{
        flex:4,
        width:'100%',
        resizeMode: 'contain'
    },
    version:{
        flex:2,
        alignSelf:'center',
        color: BaseColors.text,
        padding: 20
    },
    message:{
        flex:1,
        alignSelf:'center',
        flexShrink:2,
        color: BaseColors.text,
        padding: 20,
        // flexBasis:'content'
    }
})


export default SplashScreen