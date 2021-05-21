import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react'
import { View, Text,FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'

import AppListCard from '../components/AppListCard';
import AppScreen from '../components/AppScreen';


const MyList = () => {
    const navigation = useNavigation();
    const [travelList,setTravelList] = useState("");

    useEffect(() =>{
        axios.get("https://travel-server-erick.herokuapp.com/api/userlist")
        .then(res =>{
            let travelData = res.data;
            console.log(travelData)
            setTravelList(travelData);
        }).catch(err => console.log(err))
    },[])

    useFocusEffect(() =>{
            axios.get("https://travel-server-erick.herokuapp.com/api/userlist")
            .then(res =>{
                let travelData = res.data;
                console.log(travelData)
                setTravelList(travelData);
            }).catch(err => console.log(err))


       
    })

    const handleDelete = (travel) => {
        let deletedItem ;
        axios.delete(`https://travel-server-erick.herokuapp.com/api/userlist/${travel.id}`)
        .then(res =>{
            deletedItem = res.data;
            setTravelList(travelList.filter(item => item.id !== deletedItem.id))
        })
    }
    return (
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
                        image:item.image,
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

export default MyList
