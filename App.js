import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from "react-native-splash-screen";
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/containers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import store from './src/store';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { userData } = useSelector(state => state.userReducer);

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const renderScreen = () => {
    if (userData.isLoggedIn) {
      return <Home />
    }
    return <Login />
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {renderScreen()}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}


export default AppWrapper;
