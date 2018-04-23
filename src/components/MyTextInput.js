import React, { Component } from 'react';
import {TextInput} from 'react-native';

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
render()
{
  return(
    <TextInput
      style={styles.TextInputStyle}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      secureTextEntry={this.props.ispassword}
      placeholder={this.props.placeholder}
      keyboardType={this.props.keyboardType}
      autoCorrect={this.props.autocorrection}
      autoCapitalize={this.props.autocapitalization}
    />
  );
}



};

const styles = {

    TextInputStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#FFFFFF',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 13,
      paddingBottom: 13
    }

};
