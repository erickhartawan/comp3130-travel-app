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
import ListingModal from './ListingModal';

// import travelData from '../travelData'


const Listing = ({category}) => {
    const [modalVisibleParent,setModalVisibleParent]= useState(false);

    const navigation = useNavigation();
    const [travelList, setTravelList] = useState();
    let travelData ;
    
    useEffect(() =>{
        axios.get("https://travel-server-erick.herokuapp.com/api/listing")
        .then(res =>{
            travelData = res.data;
            console.log(travelData)
            var updatedTravelList = '';
            if(category == "ALL"){
                updatedTravelList = travelData
            } else{
                updatedTravelList = travelData.filter((destination)=> destination.state == category)
            }
            setTravelList(updatedTravelList);
        }).catch(err => console.log(err))
    },[])


        
    const handleDelete = (travel) => {
        let deletedItem ;
        axios.delete(`https://travel-server-erick.herokuapp.com/api/listing/${travel.id}`)
        .then(res =>{
            deletedItem = res.data;
            setTravelList(travelList.filter(item => item.id !== deletedItem.id))
        })
    }
    const toggleModal = () =>{
        setModalVisibleParent(!modalVisibleParent);
        console.log(modalVisibleParent);
        console.log('reached the toggle modal function')
    }



    //     const newTravelList =  travelList.filter (item => item.id !== travel.id);
    //     setTravelList(newTravelList);
    // }

    return (
        <>
            {   modalVisibleParent ?
                <ListingModal
                visibility={modalVisibleParent}
                /> : <></>
            }
        <AppScreen>
            <FlatList
                data={travelList}
                keyExtractor={travel => travel.id.toString()}
                renderItem = {({item}) =>
                <AppListCard
                    title={item.title}
                    subtitle={item.subtitle}
                    rating={item.rating}
                    image={item.image}
                    onDelete={() => handleDelete(item)}
                    handlePress={() => navigation.navigate("Details",{
                            image: item.image,
                            title: item.title,
                            subtitle: item.subtitle,
                            state: item.state,
                            rating:item.rating,
                            description: item.description
                    })}
                >
                </AppListCard>
            }
            >
            </FlatList>
            <AppAbsoluteButton
            style={styles.addButton}
            containerStyle={styles.addButton}
            title="+"
            textStyle={styles.addButtonStyle}
            onPress={toggleModal}
            />
        </AppScreen>
        </>
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
          backgroundColor: BaseColors.secondary,
          zIndex:12
      },
      addButtonStyle:{
          fontSize: 30,
          fontWeight: "500",
          color : BaseColors.text,

      }
})


export default Listing
