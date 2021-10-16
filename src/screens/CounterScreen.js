import React, { useReducer } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const reducer = (state, action) => {

    return (state + action.amount >= 0) ? (state + action.amount) : state
};

const CounterScreen = () =>  {

   const [state, dispatch] = useReducer(reducer, 0);

    return(
        <View style={styles.container}>

            <Button title='Increment' onPress={() => dispatch({ amount: 1 })}
                style={styles.componentsBtn} color='white'
            />

            <Button title='Decrement' onPress={() => dispatch({ amount: -1 })}
                style={styles.componentsBtn} color='white'
            />

            <Text> Current value is: {state} </Text>

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