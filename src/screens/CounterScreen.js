import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const CounterScreen = () =>  {

   const [counter, setCounter] = useState(0);

    return(
        <View style={styles.container}>

            <Button title='Increment' onPress={ () => setCounter(counter+1) }
                style={styles.componentsBtn} color='white'
            />

            <Button title='Decrement' onPress={ () => setCounter(counter-1 )}
                style={styles.componentsBtn} color='white'
            />

            <Text> Current value is: { counter } </Text>

        </View>
    );
}

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

  export default CounterScreen;