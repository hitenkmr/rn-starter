import React from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  const greeting = 'Hi there!'
  const name = 'Hitender Kumar'
  const showFullName = false

  onPressComponentsBtn = () => { navigation.push('Components') }
  onPressFlatListBtn = () => { navigation.push('FlatList') }
  onPressImageScreenBtn = () => { navigation.push('Image') }
  onPressFlexBoxBtn = () => { navigation.push('FlexBoxExScreen') }

  return <View style={styles.container}>

    <Button title='Click for Components Screen' onPress={this.onPressComponentsBtn}
      style={styles.componentsBtn} color='white'
    />

    <Button title='Click for List Screen' onPress={this.onPressFlatListBtn}
      style={styles.componentsBtn} color='white'
    />


    <Button title='Click for Image Screen' onPress={this.onPressImageScreenBtn}
      style={styles.componentsBtn} color='white'
    />

    <Button title='Flexbox Examples' onPress={this.onPressFlexBoxBtn}
      style={styles.componentsBtn} color='white'
    />

  </View>

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

export default HomeScreen;
