import React, { Component } from "react";
import {StyleSheet, Text, View, TextInput, TouchableHighlight} from "react-native";

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
    state = {
        placeName: "",
        places: []
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

        this.setState(prevState => {
            return {
                places: prevState.places.concat(prevState.placeName)
            };
        });
    };

    render() {
        const placesOutput = this.state.places.map((place, i) => (
            <ListItem key={i} placeName={place} />
        ));
        return (
            <View style={styles.container}>
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
                <View style={styles.listContainer}>{placesOutput}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
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
    listContainer: {
        width: "100%"
    }
});

