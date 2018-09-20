import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

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

    // inputCleaner=()=> this.setState({placeName: ''});

    // placeAddHandler=()=> {this.placeSubmitHandler(); this.inputCleaner()};


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="An awesome place"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
});

export default PlaceInput;