import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native';

class Todo extends React.Component {

    renderRow = ({ item }) =>
        (<View style={styles.row}>
            <Text>{item.text}</Text>
        </View>);

        renderSectionHeader=  ({ section }) =>
        (<View style={styles.header}>
            <Text>{section.title}</Text>
        </View>);


    render() {
        return (
            <SectionList
                sections={sections}
                renderItem={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}

            />

        );
    }
}


const sections = [
    {
        id: 0,
        title: 'Notifications',
        data:
            [
                { id: 0, text: 'No Class Today' },
                { id: 1, text: 'The gym will be closed on' }
            ]
    },


    { 
        id: 1, 
        title: 'Section 2', 
        data: 
        [
            { id: 3, text: 'Item 3' }, 
            { id: 4, text: 'Item 4' },
            { id: 5, text: 'Item 5' },
            { id: 6, text: 'Item 6' },
            { id: 7, text: 'Item 7' }   
        ] }
];


const styles = StyleSheet.create({
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    },

    header: {
        padding: 15, marginBottom: 5,
        backgroundColor: 'grey',
        color: 'white', fontWeight: 'bold',
      }
    })
;


export default Todo;
 
