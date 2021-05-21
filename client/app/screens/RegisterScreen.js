import React, {useState} from 'react';
import { View, StyleSheet, TextInput,Button} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';

import BaseColors from '../config/BaseColors.js'
import AppScreen from '../components/AppScreen.js';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton.js';
import AppText from '../components/AppText.js';


const schema = Yup.object().shape(
    {
        username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        email: Yup.string().required().email().label("Email"),
        password:  Yup.string().required().min(4,'Please provide password at least 4 characters').max(16).label("Password"),
    }
);

const validateUser = ({username,email,password}) => {
    return !!(username) && !!(email) && !!(password)
}

export default function RegisterScreen({navigation}) {
    // const [username, setUsername] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    return (
            <AppScreen style={styles.container}>
                <Formik
                    initialValues={{email:'',username:'',password:''}}
                    onSubmit = {(values, {resetForm})=> {
                        if(validateUser(values)){    
                            console.log(values);
                            resetForm();
                            navigation.navigate("MyList");
                        }
                        else{
                            resetForm();
                            alert("Invalid Login Details")
                        }
                    }}
                    validationSchema={schema}
                    >
                    {({values, handleChange, handleSubmit, errors, setFieldTouched, touched})=> (
                        <>
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
                                    value={values.username}
                                    onBlur = {() => setFieldTouched("username")}
                                    onChangeText = {handleChange("username")}
                                    />
                                    {touched.email && <AppText style={{color:"red", fontSize:16}}>{errors.username}</AppText>}           
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    placeholder="Email Address"
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    value={values.email}
                                    onBlur = {() => setFieldTouched("email") }
                                    onChangeText = {handleChange("email")}
                                    />
                                    {touched.email && <AppText style={{color:"red", fontSize:16}}>{errors.email}</AppText>}
                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    placeholder="Password"
                                    secureTextEntry
                                    textContentType="password"
                                    value={values.password}
                                    onBlur = {() => setFieldTouched("password") }
                                    onChangeText = {handleChange("password")}
                                    />
                                    {touched.password && <AppText style={{color:"red", fontSize:16}}>{errors.password}</AppText>}
                            </View> 
                            <AppButton title="Register" onPress={handleSubmit}/>
                        </>
                    )}
                </Formik>
                <AppButton style={styles.button} title='Login instead' onPress={() => navigation.navigate("Login")} />
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
    button:{
        marginTop: 20
    }
    
})
