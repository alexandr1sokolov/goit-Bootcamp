import React, { Component } from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

class PickLocation extends Component {
  state = {
    focusedLocation: {
      latitude: 50.450090972,
      longitude: 30.523414806,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122,
    },
    locationChosen: false
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });

    this.setState(prevState => {
        return {
          focusedLocation: {
            ...prevState.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
          },
          locationChosen: true
        };
      }
    )
  };

  getLocationHandler = ()=>{
    navigator.geolocation.getCurrentPosition();
  };

  render() {
    let marker = null;

    if (this.state.locationChosen === true){
      marker = <MapView.Marker coordinate={this.state.focusedLocation}/>
    }
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          onPress={this.pickLocationHandler}
          ref={ref=>this.map = ref}
        >
          {marker}
        </MapView>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert('Pick Location!')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  map: {
    width: "80%",
    height: 250
  },
  button: {
    margin: 8
  }
});

export default PickLocation;
