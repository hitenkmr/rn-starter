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

    return (
        <View>
            <ColorCounter
                onMore={() => { setRed(red >= 255 ? red : red + COLOR_INCREMENT) }}
                onLess={() => { setRed(red <= 0 ? red : red - COLOR_DECREMENT) }}
                colorName='Red'>
            </ColorCounter>

            <ColorCounter
                onMore={() => { setBlue(blue >= 255 ? blue : blue + COLOR_INCREMENT) }}
                onLess={() => { setBlue(blue <= 0 ? blue : blue - COLOR_DECREMENT) }}
                colorName='Blue'>
            </ColorCounter>

            <ColorCounter
                onMore={() => { setGreen(green >= 255 ? green : green + COLOR_INCREMENT) }}
                onLess={() => { setGreen(green <= 0 ? green : green - COLOR_DECREMENT) }} colorName='Green'>
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