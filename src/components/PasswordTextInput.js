import React, { Component } from 'react';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {password: ''};
  }
render()
{
  return(

        <PasswordInputText
        style={styles.TextInputStyle}
        value={this.state.password}
        onChangeText={ (password) => this.setState({ password }) }
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
