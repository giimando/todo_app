import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

class TodoScreen extends React.Component{
    static navigationOptions = {
        title: 'ToDo',
      };
    render(){
        return( 
            <ScrollView>
                <View style={styles.container1} />
                <View style={styles.container2} />
                <View style={styles.container3} />
                <View style={styles.container4} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        padding: 100, 
        backgroundColor: 'black'},
        container2: {
            padding: 100, 
            backgroundColor: 'grey'},   
            container3: {
                padding: 100, 
                backgroundColor: 'white'},
                container4: {
                    padding: 100, 
                    backgroundColor: 'red'},
    }
);
export default TodoScreen;