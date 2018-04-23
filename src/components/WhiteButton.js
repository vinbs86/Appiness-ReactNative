import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

const WhiteButton = ({onPress, children},props) => {

  return(
    <TouchableOpacity onPress={onPress} style={styles.buttonstyle}>
    <Text style={styles.textstyle}>{children}</Text>
    </TouchableOpacity>
  );

};

const styles = {
  buttonstyle:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 13
  },

  textstyle:
  {
    color: '#4cbbe9'
  }

};
export default WhiteButton;
