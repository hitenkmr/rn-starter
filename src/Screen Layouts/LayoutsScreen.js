import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const LayoutsScreen = () => {

    return (
        <ScrollView style={styles.boxStyle}>
            <Text style={styles.box1text1Style}> Text </Text>
            <Text style={styles.box1text2Style}> Another Text </Text>

            <View style={styles.box1Style}>
                <Text style={styles.box2textStyle}> Text1 </Text>
                <Text style={styles.box2textStyle}> Text2 </Text>
                <Text style={styles.box2textStyle}> Text3 </Text>
            </View>

            <View style={styles.box2Style}>
                <Text style={styles.box2textStyle}> Text1 </Text>
                <Text style={styles.box2textStyle}> Text2 </Text>
                <Text style={styles.box2textStyle}> Text3 </Text>
            </View>

            <View style={styles.box3Style}>
                <Text style={styles.box3text1Style}> Text1 </Text>
                <Text style={styles.box3text2Style}> Text2 </Text>
                <Text style={styles.box3text3Style}> Text3 </Text>
            </View>

            <View style={styles.box3Style}>
                <Text style={styles.box4text1Style}> Text1 </Text>
                <Text style={styles.box4text2Style}> Text2 </Text>
                <Text style={styles.box4text3Style}> Text3 </Text>
            </View>

            <View style={styles.box3Style}>
                <Text style={styles.box5text1Style}> Text1 </Text>
                <Text style={styles.box5text2Style}> Text2 </Text>
                <Text style={styles.box5text3Style}> Text3 </Text>
            </View>


            <View style={styles.box3Style}>
                <Text style={styles.box6text1Style}> Text1 </Text>
                <Text style={styles.box6text2Style}> Text2 </Text>
                <Text style={styles.box6text3Style}> Text3 </Text>
            </View>

            <View style={styles.box3Style}>
                <Text style={styles.box7text1Style}> Text1 </Text>
                <Text style={styles.box7text2Style}> Text2 </Text>
                <Text style={styles.box7text3Style}> Text3 </Text>
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    boxStyle: {
        borderWidth: 5,
        borderColor: 'black',
        margin: 10
    },
    box1text1Style: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20,
        padding: 5
    },
    box1text2Style: {
        borderWidth: 1,
        borderColor: 'red',
        marginHorizontal: 50,
        marginBottom: 20,
        padding: 50
    },

    box1Style: {
        borderWidth: 5,
        borderColor: 'black',
        margin: 10,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center'
    },

    box2textStyle: {
        borderWidth: 1,
        borderColor: 'red',
    },

    box2Style: {
        borderWidth: 5,
        borderColor: 'black',
        margin: 10,
        height: 200,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    box3Style: {
        borderWidth: 5,
        borderColor: 'black',
        margin: 10,
        height: 200
    },

    box3text1Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },

    box3text2Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    },

    box3text3Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 3
    },

    box4text1Style: {
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'flex-start'
    },

    box4text2Style: {
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'center',
    },

    box4text3Style: {
        borderWidth: 1,
        borderColor: 'red',
        alignSelf: 'flex-end',
    },

    box5text1Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    },

    box5text2Style: {
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',
        fontSize: 20,
        flex: 2
    },

    box5text3Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    },

    box6text1Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1
    },

    box6text2Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        top: 10
    },

    box6text3Style: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
    },

    box7text1Style: {
        borderWidth: 2,
        borderColor: 'yellow',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    },

    box7text2Style: {
        borderWidth: 1,
        borderColor: 'red',
     },

    box7text3Style: {
        borderWidth: 1,
        borderColor: 'red',
     },
});

export default LayoutsScreen;