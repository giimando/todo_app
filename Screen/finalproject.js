import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity,AlertIOS, Platform } from 'react-native';
import { Icon} from 'react-native-elements';
import prompt from 'react-native-prompt-android';



class FinalProjectScreen extends React.Component {

    static navigationOptions = {
        title: 'Final Project',
      };

      constructor(props) {
          super(props);
          this.state = {
              text: '',
              data: [
                  'Eat','Sleep','Rave', 'Repeat'
              ]
          };

      }

      remove = (index) => {
          this.setState(
              prevState => {
                  const data = prevState.data.slice();
                  data.splice(index,1);
                return { data };
                }
          );

      };
      
      showForm = () => {
        if (Platform.OS === 'android') {
            prompt(
                'Enter Text',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: text => this.add(text) },
                ],
                {
                    type: 'secure-text',
                    cancelable: false,
                    defaultValue: 'test',
                    placeholder: 'placeholder'
                }
            );
        } else {
            AlertIOS.prompt(
                'Enter  Text',
                null,
                text => this.add(text)
            );
        }
    }


      add = (text) => {
          this.setState(
              prevState => {
                  const { data }=prevState;
                  return {
                      data: data.concat(text),
                      text:''
                  };
              }
          );
      }



      renderRow = ({ item, index }) =>
        (
        <View>

    
        <View style={styles.row} key={index}>
            <Text>{item}</Text>
            <TouchableOpacity

                style={{
                    alignItems:'flex-end',
                    justifyContent: 'center',
                    borderColor: '#32CD32'
                }}

               onPress={() => this.remove(index)}
               //onPress={()=>console.log(index)}
            >

                <Icon name="minus" type='font-awesome' /> 
                </TouchableOpacity>
        </View>
        
        </View>
        );
    



    render() {
        return (
           <View>
           <View>
        <FlatList
            data={this.state.data}
            renderItem={this.renderRow} 
            keyExtractor={item => item.toString()}
            />
            </View>

            <View>
                <Button title="+" 
                onPress={this.showForm}/>
                </View>
        </View> 


        );
    }
}

const styles = StyleSheet.create({ 
    row: {padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    },
})
;

export default FinalProjectScreen; 