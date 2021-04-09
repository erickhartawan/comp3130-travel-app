import React, {useState} from 'react';
import { View, StyleSheet, TextInput,Button} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import BaseColors from '../config/BaseColors.js'
import AppScreen from '../components/AppScreen.js';
import AppTextInput from '../components/AppTextInput';

export default function RegisterScreen() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
            <AppScreen style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="library" 
                        size={60}
                        color={BaseColors.primary}/>
                </View>
                <View style={styles.textInputContainer}>  
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Full Name"
                        textContentType="username"
                        onChangeText = { userInputName => setUsername(userInputName)}
                        />           
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        placeholder="Email Address"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        onChangeText = { userInputEmail => setEmail(userInputEmail)}
                        />
                    <AppTextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        onChangeText = {userInputPassword => setPassword(userInputPassword)}
                        />
                </View> 
                <Button title="Register" onPress={() => console.log(username, email,password )}/>
            </AppScreen>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:1,
        backgroundColor: BaseColors.background,
        flex:1,
        justifyContent: 'center',
        width:'100%',
        

    },
    
})
