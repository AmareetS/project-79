import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import DailyPicScreen from "./screens/DailyPicScreen";
import SpaceCraftsScreen from "./screens/SpaceCraftsScreen";
import StarMapScreen from "./screens/StarMapScreen";

const Stack= createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;