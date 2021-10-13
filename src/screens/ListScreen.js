import React from "react";
import {View, Text, StyleSheet } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

 const ListScreen = () =>   {
	 const friends = [
	 {name:'Friend#1'}, 
	 {name:'Friend#2'},
	 {name:'Friend#3'},
	 {name:'Friend#4'},
	 {name:'Friend#5'},
	 {name:'Friend#6'},
	 {name:'Friend#7'},
	 {name:'Friend#8'},
	 {name:'Friend#9'},
	 {name:'Friend#10'}]

    return(
	     <FlatList 
		       horizontal
		       keyExtractor={ friend => friend.name }
             data={friends} 
             renderItem={ ( { item } ) => {
					 return <Text style= {styles.item}>{item.name}</Text>
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
  
export default ListScreen;