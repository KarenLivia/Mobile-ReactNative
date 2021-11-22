import React from 'react'
import {View, Text, FlatList, Alert} from 'react-native'
import users from "../data/users";
import { ListItem, Avatar, Icon, Button } from 'react-native-elements'

export default props => {

function confirmUserDeletion(user) {
  Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
  {
    text: 'Sim',
    onPress() {
      console.warn('delete ' + user.id)
    }
  },
  {
    text: 'Não'
  }
  ])
}

getUserItem = ({ item: user }) => (
  <ListItem.Swipeable
  bottomDivider
  leftContent={
    <Button
    onPress = {() => props.navigation.navigate('UserForm', user)}
      title="Editar"
      icon={{ name: 'edit', color: 'white' }}
      buttonStyle={{ minHeight: '100%' }}
    />
  }
  rightContent={
    <Button
    onPress = {() => confirmUserDeletion(user)}
      title="Deletar"
      icon={{ name: 'delete', color: 'white' }}
      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
  }
>
    <Avatar source={{uri: user.avatarUrl}} />
    <ListItem.Content>
      <ListItem.Title>{user.name}</ListItem.Title>
      <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem.Swipeable>
)

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}