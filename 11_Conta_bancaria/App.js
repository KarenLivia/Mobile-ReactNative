import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title:'Início',
          headerStyle:{
            backgroundColor: '#ff9ccb'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerStyle:{
            backgroundColor: '##ff9ccb'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
