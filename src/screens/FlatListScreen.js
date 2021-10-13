import React from "react";
import {View, Text, StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

 const FlatListScreen = () =>   {
	 const friends = [
	 {name:'Friend#1', age: 21}, 
	 {name:'Friend#2', age: 21},
	 {name:'Friend#3', age: 28},
	 {name:'Friend#4', age: 20},
	 {name:'Friend#5', age: 22},
	 {name:'Friend#6', age: 26},
	 {name:'Friend#7', age: 29},
	 {name:'Friend#8', age: 26},
	 {name:'Friend#9', age: 23},
	 {name:'Friend#10', age: 22}]

    return(
	     <FlatList 
				 showsHorizontalScrollIndicator={false}
		       keyExtractor={ friend => friend.name }
             data={friends} 
             renderItem={ ( { item } ) => {
					 return <Text style= {styles.item}>
						          {item.name} - Age {item.age}
						     </Text>
				 }}
        />
	 );
 }

const styles = StyleSheet.create({
    item: {
		marginLeft: 20,
		marginVertical: 5,
      fontSize: 18,
      height: 44,
    },
});
  
export default FlatListScreen;