import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const greeting='Hi there!'
  // const fullNameGreetingText=<Text style={styles.text}>Hi Hiten kumar!</Text>
  // const sirNameGreetingText=<Text style={styles.text}>Hi kumar!</Text>
  // const firstView = <View>
  //                         <Text style={styles.text}>{greeting}</Text>
  //                         {showFullName ? fullNameGreetingText : sirNameGreetingText}
  //                   </View>
  
  const name='Hitender Kumar'
  const showFullName = false

  return <View>
    <Text style={styles.title}>Greeting started with react native!</Text>
    <Text style={styles.subtitle}>My name is {name}</Text>
  </View>

};

const styles = StyleSheet.create({
  title: {
    fontSize: 45
  },
  subtitle: {
    fontSize: 20
  }
});

export default HomeScreen;
