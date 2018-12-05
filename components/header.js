import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// This is a stateless functional component
// const Header = (props) => <Text>{props.textIwant}</Text>;

// This is a stateful functional component
class Header extends React.Component {

    constructor(props){
        super(props);
    this.textIwant = props.textIwant
    }

    
    render(){
        return (
            <Text>{this.textIwant}</Text>
        );
    }
}

export default Header;
