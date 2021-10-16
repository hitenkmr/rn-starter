import React, { useReducer } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const reducer = (state, action) => {
    return (state.count + action.amount >= 0) ? {...state, count: state.count + action.amount} : state
};

const CounterScreen = () =>  {

   const [state, dispatch] = useReducer(reducer, {count: 0});
   const {count} = state

    return(
        <View style={styles.container}>

            <Button title='Increment' onPress={() => dispatch({ amount: 1 })}
                style={styles.componentsBtn} color='white'
            />

            <Button title='Decrement' onPress={() => dispatch({ amount: -1 })}
                style={styles.componentsBtn} color='white'
            />

            <Text> Current value is: {count} </Text>

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