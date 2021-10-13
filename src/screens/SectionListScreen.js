import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

export default class SectionListScreen extends React.Component {

    render() {
        return (
          <View style={styles.container}>
                <SectionList

                //sections data source
                sections={[
                    { title: 'D', data: ['Devin', 'Dan', 'Dominic', 'den', 'dimen', 'dimen jr.', 'Devin jr.', 'Dan jr.', 'Dominic jr.', 'den jr.', 'dimen jr.'] },
                    { title: 'J', data: ['Jackson', 'James', 'Jullian', 'Jimmy', 'Joel', 'John', 'Julie', 'Jackson jr.', 'James jr.', 'Jullian jr.', 'Jimmy jr.', 'Joel jr.', 'John jr.', 'Julie jr.'] },
                ]}

                //render item
                renderItem={(cell) =>
                    <Text style={styles.item}>{cell.item}</Text>
                }

                //render section header
                renderSectionHeader={(sectionHeader) =>
                    <Text style={styles.sectionHeader}>{sectionHeader.section.title}</Text>
                }

                //extract key 
                keyExtractor={(item, index) =>
                    index
                }
            />
          </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: 'rgba(234,222,211,1.0)'
    },
    sectionHeader: {
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'green',
        height: 50
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})