import React from 'react'
import { View, Text,Image,StyleSheet} from 'react-native'
import AppIcon from '../components/AppIcon'
import AppScreen from '../components/AppScreen'
import BaseColors from '../config/BaseColors'
const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate("Login")
    }, 3000);
    return (
        <AppScreen>
            <Image 
            style={styles.logo}
            source={require('./../../assets/logoCorrect.png')}
            />
            <Text style={styles.version}>
                v.0.0.1
            </Text>
            <Text style={styles.message}>
                You will be redirected to Register page in 3s
            </Text>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    logo:{
        flex:2,
        width:'100%',
        resizeMode: 'contain'
    },
    version:{
        flex:2,
        alignSelf:'center',
        color: BaseColors.secondary
    },
    message:{
        flex:1,
        alignSelf:'center',
        color: BaseColors.primary 
    }
})


export default SplashScreen