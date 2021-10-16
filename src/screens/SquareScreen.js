import React, { useState } from "react";
import { Text, Button, View, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10
const COLOR_DECREMENT = 10

const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    console.log(red)
    console.log(blue)
    console.log(green)

    const checkAndUpdateColor = (updatedColor, setColor) => {
        if (updatedColor > 255 || updatedColor < 0) { return }
        setColor(updatedColor)
    };

    return (
        <View>
            <ColorCounter
                onMore={() => { checkAndUpdateColor(red + COLOR_INCREMENT, setRed) }}
                onLess={() => { checkAndUpdateColor(red - COLOR_DECREMENT, setRed) }}
                colorName='Red'>
            </ColorCounter>

            <ColorCounter
                onMore={() => { checkAndUpdateColor(blue + COLOR_INCREMENT, setBlue) }}
                onLess={() => { checkAndUpdateColor(blue - COLOR_DECREMENT, setBlue) }}
                colorName='Blue'>
            </ColorCounter>

            <ColorCounter
                onMore={() => { checkAndUpdateColor(green + COLOR_INCREMENT, setGreen) }}
                onLess={() => { checkAndUpdateColor(green - COLOR_DECREMENT, setGreen) }}
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