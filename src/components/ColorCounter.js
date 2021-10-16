import React, { useState } from "react";
import { Text, Button, View, StyleSheet, FlatList } from "react-native";

const ColorCounter = (props) => {

    return (
        <View>
            <Text>{props.colorName}</Text>
            <Button title={`More ${props.colorName}`} onPress={() => { props.onMore() }} />
            <Button title={`Less ${props.colorName}`} onPress={() => { props.onLess() }} />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter;