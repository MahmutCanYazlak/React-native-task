import { View, Text, LogBox } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'
import store from './src/store'


const App = () => {

  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>

  )
}

export default App