import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../../style';

export default function Pessoal() {
  let nome = 'Karen Livia Alves';
  let email = 'email@email.com';
  let dataNasc = '29/09/89';
  let tel = '(13) 99201-2044';
  let git = 'https://github.com/KarenLivia';
  return (
    <View style={styles.container}>
      <View style={styles.borda}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/55704139?v=4' }}
          style={styles.image}
        />
        </View>
      <View style={styles.box}>
        <Text style={styles.titulo}>Dados Pessoais</Text>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Data de Nascimento: {dataNasc}</Text>
        <Text style={styles.texto}>E-mail: {email}</Text>
        <Text style={styles.texto}>Celular: {tel}</Text>
        <Text style={styles.texto}>Git: {git}</Text>
      </View>

    </View>
  );
}
