import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../style';
 
export default function Formacao() {
 return (
  <View style={styles.container2}>
  <View style={styles.box2}>
    <Text style={styles.titulo}>Formação</Text>
    <Text style={styles.textotitulo}>• Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
    <Text style={styles.texto2}>FATEC - Santos/Rubens Lara</Text>
    <Text style={styles.textotitulo}>• Meta Men - Barber Edition</Text>
    <Text style={styles.texto2}>Pivot Point - Santos</Text>
    <Text style={styles.textotitulo}>• Tecnólogo em Sistemas para Internet</Text>
    <Text style={styles.texto3}>Fatec - Santos/Rubens Lara</Text>
    <Text style={styles.texto2}>6º semestre</Text>
    
  </View>

</View>
  );
}
