import React from "react";
import { Modal, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
            <TouchableOpacity onPress={props.onItemDeleted} style={styles.delButton}>
                <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onModalClosed} style={styles.closeButton}>
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    delButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10
    },
    closeButton: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});

export default placeDetail;
