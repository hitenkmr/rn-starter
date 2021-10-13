import React from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  const greeting = 'Hi there!'
  const name = 'Hitender Kumar'
  const showFullName = false

  onPressComponentsBtn = () => { props.navigation.push('Components') }
  onPressFlatListBtn = () => { props.navigation.push('FlatList') }

  return <View style={styles.container}>

    <Button title='Click for Components Screen' onPress={this.onPressComponentsBtn}
      style={styles.componentsBtn} color='white'
    />

    <TouchableOpacity onPress={this.onPressFlatListBtn}>
      <Text style={styles.listBtn}>Go to List Demo</Text>
    </TouchableOpacity>

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
    backgroundColor:'red',
    textAlign:'center'
  }
});

export default HomeScreen;
