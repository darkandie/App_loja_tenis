import 'react-native-gesture-handler';

import React from 'react';
import Routes from './src/router'
import { StatusBar } from 'react-native';

const App = () => {
  return (
  <>
    <StatusBar style = "light" backgroundColor = "#000" />
    <Routes />
  </> 
  )
};

export default App;