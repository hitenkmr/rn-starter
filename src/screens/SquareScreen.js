import React, { useReducer } from "react";
import { Text, Button, View, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return (state.red + action.amount > 255 || state.red + action.amount < 0)
                ? state
                : { ...state, red: state.red + action.amount };
        case 'blue':
            return (state.blue + action.amount > 255 || state.blue + action.amount < 0)
                ? state
                : { ...state, blue: state.blue + action.amount };
        case 'green':
            return (state.green + action.amount > 255 || state.green + action.amount < 0)
                ? state
                : { ...state, green: state.green + action.amount };
        default:
            return state
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0})
    const {red, blue, green} = state;

    console.log(red, blue, green)

    return (
        <View>
            <ColorCounter
                onMore={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) }
                onLess={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) }
                colorName='Red'>
            </ColorCounter>

            <ColorCounter
                onMore={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) }
                onLess={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) }
                colorName='Blue'>
            </ColorCounter>

            <ColorCounter
                onMore={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT }) }
                onLess={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }) }
                colorName='Green'>
            </ColorCounter>

            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }} />
        </View>
    );
}

function prepareColor(red, green, blue) {
    console.log(red, green, blue)
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default SquareScreen;