import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <ScrollView>
            <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} score={9} />
            <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} score={10} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={11} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={11} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={11} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={11} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={11} />
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} score={11} />
        </ScrollView>
    );
};

const styles = () => { };

export default ImageScreen;
