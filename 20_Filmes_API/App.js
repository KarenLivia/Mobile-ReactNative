import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Filmes from './src/filmes';
import Infos from './src/infos';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
       <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Filmes" options={{headerShown: false}}  component={Filmes} />
        <Stack.Screen name="Infos" options={{headerShown: false}}  component={Infos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}