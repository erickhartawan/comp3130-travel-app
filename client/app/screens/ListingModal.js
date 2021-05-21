import React, { useState,useEffect } from 'react'
import {FlatList,Modal,StyleSheet,View,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppListCard from '../components/AppListCard';
import AppScreen from '../components/AppScreen';
import AppModal from '../components/AppModal';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import BaseColors from '../config/BaseColors';
import AppAbsoluteButton from '../components/AppAbsoluteButton';




const ListingModal = ({visibility}) => {
    const [modalVisible,setModalVisible]= useState(visibility);

    const toggleModal = () =>{
        setModalVisible(!modalVisible);
        console.log(modalVisible);
        console.log('reached the toggle modal function')
    }

    const schema = Yup.object().shape(
        {
            id: Yup.string().required().label("id"),
            title:  Yup.string().required().min(2).label("title"),
            subtitle:  Yup.string().required().min(2).label("subtitle"),
            rating:  Yup.number().positive().required().label("rating"),
            state:  Yup.string().required().min(2).max(3,'Use 3 letter state format').label("state"),
            description: Yup.string().required().label('description')
        }
    );

    const validateListing = ({id,title,subtitle,rating,state, description}) => {
        // axios.get()// request for user
        return(
            users.filter((user) => user.email === email && user.password === password).length>0
        );
    };

    return (    
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                }}
            >
                <AppScreen style={styles.container}>
                <Formik
                    initialValues={{id:'', title:'',subtitle:'',rating:'',state:'', description:''}}
                    onSubmit = {(values, {resetForm})=> {
                            if(validateListing(values)){    
                                console.log(values);
                                resetForm();
                                navigation.navigate("MyList");
                            }
                            else{
                                resetForm();
                                alert("Invalid Login Details")
                            }
                        }}
                    validator={() => ({})}
                    >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched,})=> (
                    <>
                    <View style={styles.textInputContainer}>             
                    <AppTextInput
                        name="idField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="counter"
                        placeholder="id"
                        keyboardType="email-address"
                        value={values.id}
                        onBlur = {() => setFieldTouched("id")}
                        onChangeText = {handleChange("id")}
                        />
                    {touched.id && <AppText style={{color:"red", fontSize:16}}>{errors.id}</AppText>}
                    <AppTextInput
                        name="titleField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="format-title"
                        placeholder="Title"
                        keyboardType="email-address"
                        value={values.title}
                        onBlur = {() => setFieldTouched("title")}
                        onChangeText = {handleChange("title")}
                        />
                    {touched.title && <AppText style={{color:"red", fontSize:16}}>{errors.title}</AppText>}
                    <AppTextInput
                        name="subtitleField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="format-text-variant"
                        placeholder="Subtitle - one liner"
                        keyboardType="email-address"
                        value={values.subtitle}
                        onBlur = {() => setFieldTouched("subtitle")}
                        onChangeText = {handleChange("subtitle")}
                        />
                    {touched.subtitle && <AppText style={{color:"red", fontSize:16}}>{errors.subtitle}</AppText>}
                    <AppTextInput
                        name="ratingField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="numeric-9-plus-box-multiple-outline"
                        placeholder="Rating - 1 to 10"
                        keyboardType="number-pad"
                        value={values.rating}
                        onBlur = {() => setFieldTouched("rating")}
                        onChangeText = {handleChange("rating")}
                        />
                    {touched.rating && <AppText style={{color:"red", fontSize:16}}>{errors.rating}</AppText>}
                    <AppTextInput
                        name="stateField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="sign-real-estate"
                        placeholder="NSW,TAS,ACT,VIC,NT,SA"
                        keyboardType="email-address"
                        value={values.state}
                        onBlur = {() => setFieldTouched("state")}
                        onChangeText = {handleChange("state")}
                        />
                    {touched.state && <AppText style={{color:"red", fontSize:16}}>{errors.state}</AppText>}
                    <AppTextInput
                        name="descField"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="semantic-web"
                        placeholder="A brief description here"
                        keyboardType="email-address"
                        value={values.description}
                        onBlur = {() => setFieldTouched("description")}
                        onChangeText = {handleChange("description")}
                        />
                    {touched.description && <AppText style={{color:"red", fontSize:16}}>{errors.description}</AppText>}
                    <AppButton title="Add Listing" onPress={handleSubmit}/>
                    <AppButton title="Cancel" onPress={toggleModal}/>
                </View>  
            </>
                )}
                 </Formik>
                 
        </AppScreen>
            </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'rgba(40,40,40,0.7)',
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      addButton:{
          position: 'absolute',
          bottom:10,
          right: 10,
          width: 70,
          height:70,
          borderRadius: 60,
          backgroundColor: BaseColors.tertiary,
          zIndex:12
      },
      addButtonStyle:{
          fontSize: 30,
          fontWeight: "500",
          color : BaseColors.text,

      }
})



export default ListingModal
