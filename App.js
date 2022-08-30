import React, { useEffect, useState } from 'react';
import {
  I18nManager,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from "react-native-splash-screen";
import RNRestart from 'react-native-restart';
import Login from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/containers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import store from './src/store';
import CONSTANTS from './src/constants/constants';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { userData } = useSelector(state => state.userReducer);
  const [auth, setAuth] = useState(false)
  const [screen, setScreen] = useState(CONSTANTS.SCREENS.HOME)

  useEffect(() => {
    // RNRestart.Restart()
    // I18nManager.allowRTL(true)
    // I18nManager.forceRTL(true)
    SplashScreen.hide()
  }, [])


  useEffect(() => {
    if (userData.email) {
      setScreen(CONSTANTS.SCREENS.HOME)
    }
  }, [userData])

  const renderScreen = () => {
    switch (screen) {
      case CONSTANTS.SCREENS.HOME:
        return <Home />
      default:
        return <Login />
    }
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
    <Provider store={store}>
      <App />
    </Provider>
  )
}


export default AppWrapper;
