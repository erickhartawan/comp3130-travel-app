import React from 'react'
import { View, Text, AppState } from 'react-native'
import AppDetailPage from '../components/AppDetailPage'
import AppScreen from '../components/AppScreen'

const TravelDetail = ({route, navigation}) => {
    const {image,title, subtitle,rating,description} = route.params;
    return (
        <AppScreen>
            <AppDetailPage
                image={image}
                title={title}
                subtitle={subtitle}
                rating={rating}
                description={description}
            />
        </AppScreen>

        
    )
}
// const styles = StyleSheet.create({
//     style
// })

export default TravelDetail
