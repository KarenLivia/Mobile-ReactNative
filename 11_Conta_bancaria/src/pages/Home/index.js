import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView, Slider, Switch, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../style';
import { Picker } from '@react-native-picker/picker';

export default function Home() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState(0);
  const [escolaridade, setEscolaridade] = useState(0);
  const [limite, setLimite] = useState(0);
  const [status, setStatus] = useState(0);

  function irSobre() {
    navigation.navigate('Sobre', { nome, sobrenome, idade, sexo, escolaridade, limite, status});
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.texto}>Nome: </Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.texto}>Sobrenome: </Text>
        <TextInput
          style={styles.input}
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text)}
        />
        <Text style={styles.texto}>Idade: </Text>
        <TextInput
          style={styles.input2}
          value={idade}
          keyboardType="number-pad"
          onChangeText={(number) => setIdade(number)}
        />
        <Text style={styles.texto}>Sexo: </Text>
        <Picker
          style={styles.texto}
          selectedValue={sexo}
          onValueChange={(value) => setSexo(value)}>
          <Picker.Item key={0} value={0} label="Selecione" />
          <Picker.Item key={1} value={'Feminino'} label="Feminino" />
          <Picker.Item key={2} value={'Masculino'} label="Masculino" />
        </Picker>
        <Text style={styles.texto}>Escolaridade: </Text>
        <Picker
          style={styles.texto}
          selectedValue={escolaridade}
          onValueChange={(value) => setEscolaridade(value)}>
          <Picker.Item key={0} value={0} label="Selecione" />
          <Picker.Item
            key={1}
            value={'Ensino médio (incompleto)'}
            label="Ensino médio (incompleto)"
          />
          <Picker.Item
            key={2}
            value={'Ensino médio (completo)'}
            label="Ensino médio (completo)"
          />
          <Picker.Item
            key={3}
            value={'Ensino superior (incompleto)'}
            label='Ensino superior (incompleto)'
          />
          <Picker.Item
            key={4}
            value={'Ensino superior (completo)'}
            label='Ensino superior (completo)'
          />
          <Picker.Item
            key={5}
            value={'Pós-Graduado(a)' }
            label='Pós-Graduado(a)' 
          />
          <Picker.Item
            key={6}
            value={'Mestrado' }
            label='Mestrado'
          />
          <Picker.Item
            key={7}
            value={'Doutorado' }
            label='Doutorado' 
          />
        </Picker>
         <Text style={styles.texto}>Limite: </Text>
          <Slider
            style={{ marginRight: 15, marginLeft: 15 }}
            minimumValue={0}
            maximumValue={10000}
            step={100}
            value={limite}
            onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
            minimumTrackTintColor='#ff087f'
            maximumTrackTintColor='navy'
            thumbTintColor='#ff087f'
          />
           <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
            {limite.toFixed(0)}
          </Text>
          <Text style={styles.texto}>Brasileiro: 
             {(status) ? " Sim" : " Não"}
          </Text>
          <Switch
            style={{ marginRight: 15, marginLeft: 15 }}
            value={status}
            onValueChange={(valorSwitch) => setStatus(valorSwitch)}
            thumbColor={status ? '#ff087f' : 'navy' }
          />
          <Pressable style={styles.botao} onPress={irSobre}>
            <Text style={styles.botaotext}>Confirmar</Text>
          </Pressable>
         
      </ScrollView>
    </View>
  );
}
