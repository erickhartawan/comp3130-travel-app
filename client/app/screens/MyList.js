import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { View, Text,FlatList } from 'react-native'
import AppListCard from '../components/AppListCard';
import AppScreen from '../components/AppScreen';
import travelData from '../travelData'

const myTravelList =[
    {
        id:1,
        title:'Hobart',
        subtitle:'Somewhere in between Australia and New Zealand',
        rating: '10 out of 10',
        state: 'TAS',
        image: require(`../../assets/cities/Hobart.jpg`),
        description: "Hobart offers a contrasting blend of heritage, scenery and culture, with world class activities and attractions nearby. Nestled amongst the foothills of kunanyi / Mt Wellington, Hobart combines heritage charm with a modern lifestyle in a setting of exceptional beauty. It's no wonder Lonely Planet has called Hobart one of the top ten spots to visit in the world right now."

    },
    {
        id:2, 
        title:'Brisbane',
        subtitle:'Most hooman in Queensland',
        rating:'9 out of 10',
        state: 'QLD',
        image: require(`../../assets/cities/Brisbane.jpg`),
        description: "Brisbane is the capital of and most populated city in the Australian state of Queensland, and the third most populous city in Australia."
    },
]

const MyList = () => {
    const navigation = useNavigation();
    const [travelList,setTravelList] = useState(myTravelList)

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
