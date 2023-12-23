import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StarterScreen from '../screens/StarterScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { TabBar } from '../navigation/index';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={"HomeScreen"} screenOptions={{headerShown:false}} tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="Settings" component={Settings} />

    </Tab.Navigator>
  );
}



const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  useEffect(() => {
  }, []) //bu şu işe yaıyor: eğer [] içinde bir değişken varsa ve bu değişken değişirse useEffect tekrar çalışır. eğer [] içinde bir değişken yoksa useEffect sadece bir kere çalışır.
  return (
    <Stack.Navigator
      initialRouteName="StarterScreen"
      
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="StarterScreen" component={StarterScreen} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Tab.Screen name="ProductDetailScreen" component={ProductDetailScreen} />

    </Stack.Navigator>
  )
}

export default AppStackNavigator