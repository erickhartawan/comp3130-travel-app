import React from 'react'
import { Alert, View, Text, Modal,StyleSheet } from 'react-native'
import AppScreen from './AppScreen'


const AppModal = ({children,style,visible}) => {
    return (
        <AppScreen style={[styles.container]}>
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                {children}
            </Modal>
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})


export default AppModal
