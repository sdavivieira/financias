import React from "react";
import { View, ActivityIndicator, AppRegistry, Platform } from "react-native";
import App from './App';

import AuthRoutes from './src/routes/auth.routes'
import AppRoutes from './src/routes/app.routes'

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
    const rootTag = document.getElementById('root') || document.getElementById('main');
    AppRegistry.runApplication('main', { rootTag });
}

function Routes(){
  const loading = false
  const signed = false
  return(
    signed ? <View></View> : <AuthRoutes/>
  )
}