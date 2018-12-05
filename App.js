import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/header';
import { Avatar } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodoScreen from './Screen/todo'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant='Your Journey'/>
      <Header textIwant={"Starts Here"}/>
      <Avatar
        xlarge
        rounded
        source={{uri: "C:\Users\Gerry\Desktop\Holiday Folder\IFSG-Logo.jpg"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7} />
        <Text style={styles.bigblue}>Welcome to Iron Fitness Singapore</Text>
        <Button 
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen: TodoScreen,
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center'
  },
});

export default AppContainer;