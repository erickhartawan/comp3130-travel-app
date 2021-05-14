import React, { useState,useEffect } from 'react'
import {FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

import AppListCard from '../components/AppListCard';
import AppScreen from '../components/AppScreen';
// import travelData from '../travelData'



const Listing = ({category}) => {
    const navigation = useNavigation();
    const [travelList, setTravelList] = useState();
    let travelData ;
    
    useEffect(() =>{
        axios.get("http://127.0.0.1:5001/api/listing")
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
        const newTravelList =  travelList.filter (item => item.id !== travel.id);
        setTravelList(newTravelList);
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

export default Listing
