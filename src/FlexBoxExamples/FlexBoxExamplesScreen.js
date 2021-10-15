import React from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const FlexBoxExamplesScreen = ({ navigation }) => {

    onPressBtn = () => { navigation.push('AppFlexUsesScreen') }

    return (
        <View style={styles.container}>

            <Button title='flex' onPress={this.onPressBtn}
                style={styles.componentsBtn} color='white'
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'gray'
    },

    componentsBtn: {
        fontSize: 20
    },

    listBtn: {
        fontSize: 20,
        backgroundColor: 'red',
        textAlign: 'center'
    }
});

export default FlexBoxExamplesScreen;
