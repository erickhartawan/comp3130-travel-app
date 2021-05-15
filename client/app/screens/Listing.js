import React, { useState,useEffect } from 'react'
import {FlatList,Modal,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

import AppListCard from '../components/AppListCard';
import AppScreen from '../components/AppScreen';
import AppModal from '../components/AppModal';
import AppText from '../components/AppText';
// import travelData from '../travelData'


const Listing = ({category}) => {
    const [modalVisible,setModalVisible]= useState(true);

    const navigation = useNavigation();
    const [travelList, setTravelList] = useState();
    let travelData ;
    
    useEffect(() =>{
        axios.get("http://localhost:5000/api/listing")
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
        })
    },[])

        
    const handleDelete = (travel) => {
        let deletedItem ;
        axios.delete(`http://localhost:5000/api/listing/${travel.id}`)
        .then(res =>{
            deletedItem = res.data;
            setTravelList(travelList.filter(item => item.id !== deletedItem.id))
        })
    }

    //     const newTravelList =  travelList.filter (item => item.id !== travel.id);
    //     setTravelList(newTravelList);
    // }

    return (
        <AppScreen>
            <AppScreen style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <AppScreen style={styles.modalView}>
                    <AppText> test</AppText>
            
                </AppScreen>
            </Modal>
            </AppScreen>
            


            <FlatList
                data={travelList}
                keyExtractor={travel => travel.id.toString()}
                renderItem = {({item}) =>
                <AppListCard
                    title={item.title}
                    subtitle={item.subtitle}
                    rating={item.rating}
                    image={`${item.image}`}
                    onDelete={() => handleDelete(item)}
                    handlePress={() => navigation.navigate("Details",{
                            image: item.image,
                            title: item.title,
                            subtitle: item.subtitle,
                            rating:item.rating,
                            description: item.description
                    })}
                >
                </AppListCard>
            }
            >
            </FlatList>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
})


export default Listing
