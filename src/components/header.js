//importar una libreria para ayudar a crear un componente
import React from 'react';
import { Text, View } from 'react-native';

//crear un nuevo componente
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65BBE8',
    height: 50
  },
  textStyle: {
    fontSize: 20,
    color: '#FFFFFF'
  }
};
//renderizar en device
export default Header;
