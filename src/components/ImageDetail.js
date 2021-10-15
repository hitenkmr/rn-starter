import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, title, score }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={imageSource} />
            <View style={{ margin: 10, backgroundColor: 'green', flex:1 }}>
                <Text>{title}</Text>
                <Text style={{ marginTop: 10 }}>Image score - {score}</Text>
                <View style={{marginTop:10, backgroundColor:'yellow', flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
                    <Image style={{ marginLeft:20, width: 30, height: 30, borderRadius: 15 }} source={imageSource} />
                    <Image style={{ width: 30, height: 30, borderRadius: 15 }} source={imageSource} />
                    <Image style={{ width: 30, height: 30, borderRadius: 15, marginRight: 20 }} source={imageSource} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 120,
        flexDirection: 'row'
    },

    image: {
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'green',
        width: '50%',
        height: 100
    }
});

export default ImageDetail;
