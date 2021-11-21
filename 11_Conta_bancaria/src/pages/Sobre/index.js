import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../style';
 
export default function Sobre( {route} ){
  const navigation = useNavigation();
 
  navigation.setOptions({
      title: `Bem-Vindo(a) ${route.params?.nome}!`
  })
 
  return(
  <View style={styles.container}>
   <View style={styles.box}>
      <Text style={styles.texto2}>Nome: {route.params?.nome} {route.params?.sobrenome}</Text>
      <Text style={styles.texto2}>Idade: {route.params?.idade}</Text>
      <Text style={styles.texto2}>Sexo: {route.params?.sexo}</Text>
      <Text style={styles.texto2}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style={styles.texto2}>Limite: R${route.params?.limite.toFixed(2)}</Text>
      <Text style={styles.texto2}>Brasileira: {route.params?.status ? 'Sim' : 'Não'}</Text>
      
    </View>
    </View>
  )
}
