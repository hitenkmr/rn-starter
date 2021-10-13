import React from 'react';
import { render } from 'react-dom';
import { Text, StyleSheet, Button, View } from 'react-native';
 
class ComponentsScreen extends React.Component {
    state={
      buttonTitle: "Mama Earth"
    };
    
    myPress = () => {
      this.setState({
        buttonTitle: "Coulibly"
      });
    };
    
      render() {
        return  (
            <View style={styles.container}>
    
            <Button       
            title={this.state.buttonTitle}
            color="white"
            onPress={this.myPress}
          />   
  
        </View>
        );
      }
 }

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    container: {
        backgroundColor: '#00aeef',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 15 
     }
});

export default ComponentsScreen;