import React, { Component } from "react";
import {View, TextInput, StyleSheet, TouchableHighlight, Text} from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
          <TouchableHighlight
              style={styles.placeButton}
              onPress={this.placeSubmitHandler}
          >
              <Text> Add </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
    placeButton: {
        width: "30%",
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});

export default PlaceInput;
