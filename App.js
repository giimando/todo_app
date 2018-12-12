import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/header';
import { Avatar } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodoScreen from './Screen/todo'
import FlexBoxScreen from './Screen/flexbox'
import FinalProjectScreen from './Screen/finalproject'

class App extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      // Container
      <View style={styles.container}>
      <Header textIwant='Your Journey'/>
      <Header textIwant={"Starts Here"}/>
      <View style={{padding:20, margin: 10 }} />
      <Avatar
        xlarge
        rounded
        source={{uri: "https://res.cloudinary.com/classpass/image/upload/w_960,c_scale,f_auto,q_auto/xd2rwmpzx4dqgzt3nzsu.png"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7} />
         <View style={{padding:20 }} />
        <Text style={styles.bigblue}>Welcome to Iron Fitness Singapore</Text>
        <View style={{margin:20 }} />
        <Button 
          title="What's On Today "
          color="#000000"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />
        <View style={{margin:10 }} />
        <Button 
          title=" % Calculator "
          onPress={() => this.props.navigation.navigate('FlexBoxScreen')}
          color="#000000"
        />
         <View style={{margin:10 }} />
        <Button 
          title="Final Project "
          color="#000000"
          onPress={() => this.props.navigation.navigate('FinalProjectScreen')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen: TodoScreen,
  FlexBoxScreen: FlexBoxScreen,
  FinalProjectScreen: FinalProjectScreen,
});

({headerLayoutPreset: "center",
  }
);

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