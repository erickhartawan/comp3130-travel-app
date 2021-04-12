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
    },
    {
        id:2, 
        title:'Brisbane',
        subtitle:'Most hooman in Queensland',
        rating:'9 out of 10',
        state: 'QLD',
        image: require(`../../assets/cities/Brisbane.jpg`),
    },
]

const MyList = () => {
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
                >
                </AppListCard>
            }
            >

            </FlatList>
        </AppScreen>
    )
}

export default MyList
