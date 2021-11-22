import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
 
  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcCarregarTarefas();
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulário', { id: id, title: title, description: description, atualizarLista: funcCarregarTarefas});
  }
 
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
       
        <Text style={styles.descricao}>{description}</Text>
 
        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <FontAwesome
              name="edit"
              size={20}
              style={{ color: '#FFFFFF' }}
            />
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <FontAwesome
              name="trash-o"
              size={25}
              style={{ color: '#FFFFFF' }}
            />
        </TouchableOpacity>
      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 10,
    borderRadius: 10,
    elevation: 3,
  },
  titulo:{
    fontSize: 20,
    marginLeft: 10, 
    paddingTop: 10,
  },
  descricao:{
    fontSize: 15,
    marginLeft: 10, 
    marginBottom: 20,
  },
  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "#0000ff",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "#FF0000",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
});
 
export default Card;