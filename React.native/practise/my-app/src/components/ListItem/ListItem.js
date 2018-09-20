import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

const ListItem =({placeName, onItemPressed, placeImage})=>(
    <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem} >
        <Image source={placeImage}
               style={styles.placeImage}
               resizeMode="contain"
        />
        <Text>
            {placeName}
        </Text>
    </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        width: 30,
        height: 30,

    },

});

export default ListItem;