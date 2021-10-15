import React from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const FlexBoxExamplesScreen = ({ navigation }) => {

    onFlexPressBtn = () => { navigation.push('AppFlexUsesScreen') }
    onFlexDirectionPressBtn = () => { navigation.push('AppFleDirectionUsagesScreen') }

    return (
        <View style={styles.container}>

            <Button title='flex' onPress={this.onFlexPressBtn}
                style={styles.componentsBtn} color='white'
            />

            <Button title='flex Direction' onPress={this.onFlexDirectionPressBtn}
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
