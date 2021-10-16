import React, { useState } from "react";
import { Text, Button, View, StyleSheet, FlatList } from "react-native";
import { color } from "react-native-reanimated";

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    console.log(colors)

    return (
        <View>
            <Button title='Add a color' onPress={() => setColors([randomRGB(), ...colors])} />

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, backgroundColor: item }} />
                    );
                }} />

        </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
};

const styles = StyleSheet.create({});

export default ColorScreen;