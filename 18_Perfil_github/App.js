import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from './src/service/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfil: [],
      perfilValor: '',
      valorRetorno: '',
    };
    this.retorno = this.retorno.bind(this);
  }

  async retorno() {
    let valorPerfil = this.state.perfilValor;
    const response = await api.get(valorPerfil);
    this.setState({
      perfil: response.data,
    });
    this.setState({
      valorRetorno: `
        ID: ${this.state.perfil.id}
        NOME: ${this.state.perfil.name} 
        REPOSITÓRIOS: ${this.state.perfil.public_repos}
        SEGUIDORES: ${this.state.perfil.followers}
        SEGUINDO: ${this.state.perfil.following}
      `,
    });
    Keyboard.dismiss();
  }

  render() {
    let img = this.state.perfil.avatar_url
      ? this.state.perfil.avatar_url
      : 'data:image/png;base64,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';

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.titulo}>GitHub Profile</Text>
          <FontAwesome style={{ marginLeft: 10, padding: 5, }} name="github-alt" size={45} color={'#8675A9'}/>
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Informe o usuário:"
            style={styles.input}
            onChangeText={(value) => this.setState({ perfilValor: value })}
          />

          <TouchableOpacity onPress={this.retorno}>
            <FontAwesome style={{ marginLeft: 10 }} name="search" size={40} color={'#8675A9'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={{ uri: img }}
            style={{ width: 300, height: 300, justifyContent: 'center', borderRadius: 200}}
          />
        </View>
        <View style={styles.box}>
          <Text style={{ fontSize: 20, color: "white" }}>{this.state.valorRetorno}</Text>
        </View>
        <View style={styles.box1}>
          <Text style={{ textAlign: 'center' }}>{this.state.valorRetorno}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: '#EFBBCF',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
    color: 'white',
    backgroundColor: '#8675A9', 
    padding: 5,
    borderRadius: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    fontSize: 20,
    padding: 10,
    width: 300,
    backgroundColor: "#FFD5CD",
    color: '#8675A9',
    borderColor: '#C3AED6',
    borderWidth:3,
  },
  box:{
    backgroundColor: "#C3AED6",
    margin: 20,
    borderRadius: 20,
  },
  box1:{
    marginTop: 350,
  },
});
export default App;
