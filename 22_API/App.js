import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import {Button, Icon} from 'react-native-elements';


const Stack = createStackNavigator();

export default (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList"
      screenOptions={screenOptions}>
        <Stack.Screen name="UserList" component={UserList} 
        options={({ navigation }) => {
          return{
            title: "Lista de usuários",
            headerRight: () => (
              <Button
                onPress={()=> navigation.navigate("UserForm")}
                type="clear"
                icon= {<Icon name= "add" size={25} color='white'/>}
              />
            )
          }
        }}/>
        <Stack.Screen name="UserForm" component={UserForm} 
        options={{
          title: "Formulário de usuários"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#800080'
  },
  headerTintColor: '#fff',
  headerTitleStyle:{
    fontWeight: 'bold'
  }
}
