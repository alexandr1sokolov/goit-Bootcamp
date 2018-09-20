import React from 'react';
import {Modal, StyleSheet, Text, View, Button, Image} from 'react-native';

const PlaceDetail =({selectedPlace,onItemDeleted,onModalClosed})=>{
    let modalContent = null;
    console.log(selectedPlace);
    if(selectedPlace){
        modalContent =(
            <View>
                <Image source={selectedPlace.image}
                       style={styles.placeImage}
                />
                <Text style={styles.placeName}>{selectedPlace.name}</Text>
            </View>
        )
    }

    return (
        <Modal visible={selectedPlace !== null}
               animationType="slide"
               onRequestClose={onModalClosed}
        >
        <View style={styles.modalContainer}>
            {modalContent}
            <View>
                <Button title="Delete" color="red" onPress={onItemDeleted}/>
                <Button title="Close" onPress={onModalClosed}/>
            </View>
        </View>
    </Modal>)

    };

const styles = StyleSheet.create({
    modalContainer:{
        margin: 22,

    },
    placeImage:{
        width:"100%",
        height:200,
    },
    placeName:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize:28
    },


});

export default PlaceDetail;