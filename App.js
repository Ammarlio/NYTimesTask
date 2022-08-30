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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [auth, setAuth] = useState(false)
  const [openHome, setOpenHome] = useState(false)

  useEffect(() => {

    // Check if authenticated

    //fetch redux user state if there is data
    if (auth) {
      setOpenHome(true)
    } else {
      setOpenHome(false)
    }

    // RNRestart.Restart()
    // I18nManager.allowRTL(true)
    // I18nManager.forceRTL(true)
    SplashScreen.hide()
  }, [])


  useEffect(() => {

  }, [openHome])


  const passToHome = (pass) => {
    if (pass) {
      console.log(pass)
      setOpenHome(true)
    }
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {openHome ? <Home /> : <Login passToHome={passToHome} />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
