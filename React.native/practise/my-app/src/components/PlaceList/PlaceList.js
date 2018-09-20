import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import ListItem from "../ListItem/ListItem";

const PlaceList =({places, onItemSelected})=>{



    return (
        <FlatList style={styles.listContainer}
                  data={places}
                  renderItem={(info)=><ListItem
                      placeName={info.item.name}
                      placeImage={info.item.image}
                      onItemPressed ={()=> onItemSelected(info.item.key)}
                  />}
        />
    );
};

const styles = StyleSheet.create({
    listContainer:{
        width: "100%",
    },
});

export default PlaceList;