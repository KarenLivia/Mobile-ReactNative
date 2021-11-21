import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../style';
 
 
export default function Experiencia() {
  const navigation = useNavigation();
 return (
  <View style={styles.container2}>
  <View style={styles.box2}>
    <Text style={styles.titulo}>Experiência</Text>
    <Text style={styles.textotitulo}>• Barbeira</Text>
    <Text style={styles.texto2}>Náutica Tattoo - Gonzaga</Text>
    <Text style={styles.textotitulo}>• Analista de teste de qualidade de software</Text>
    <Text style={styles.texto2}>ModalGR - Santos</Text>
    <Text style={styles.textotitulo}>• Estagiária</Text>
    <Text style={styles.texto3}>IBM - São Paulo</Text>
    
  </View>

</View>
  );
}