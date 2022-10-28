import React from 'react';
import react from 'react';
import { Text, TextInput, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={{paddingTop: 25 }}>
        <Text>Translate the text bellow</Text>
        <TextInput
        style={{height: 50 }}
        placeholder='Imput something here to translate'
        onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 40 }}>
          {this.state.text.split(' ').map((word) => word && `${word}🤖`).join('')}
        </Text>
      </View>
    );
  }
}