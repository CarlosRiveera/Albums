//importar una libreria para ayudar a crear un componente
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//crear un nuevo componente
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//renderizar en device
AppRegistry.registerComponent('albums', () => App);
