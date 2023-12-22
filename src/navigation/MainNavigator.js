import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { DefaultTheme ,PaperProvider } from 'react-native-paper'
import AppStackNavigator from "./AppStackNavigator"



const theme = {
   ...DefaultTheme,
   colors:{
        ...DefaultTheme.colors,
       secondaryContainer :'transparent',
   }
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <NativeBaseProvider>
            <PaperProvider theme={theme}>
                <AppStackNavigator/>
            </PaperProvider>
        </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default MainNavigator