
import React, { Component } from 'react';

import { View, Text, Image, Button, StyleSheet, Pressable, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numeroPessoas: 0
    };

    this.contar = this.contar.bind(this);
    this.remover = this.remover.bind(this);
  }

  contar() {
    this.setState({
      numeroPessoas: this.state.numeroPessoas += 1
    });

  }

  remover() {
    this.setState({
      numeroPessoas: this.state.numeroPessoas -= 1
    });
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.textoPrincipal}>Contador de Pessoas</Text>

          <Text style={styles.conta}>{this.state.numeroPessoas}</Text>
        </View>

        <Pressable
          onPress={() => this.contar()}
        >
          <Text
            style={styles.botaoAdd}

          >+</Text>
        </Pressable>


        <Pressable
          onPress={() => this.remover()}
          >
          <Text
            style={styles.botaoRemover}

          >-</Text>
        </Pressable>
     
      </View>

    )
  }

}
const styles = StyleSheet.create({
  area: {
    marginTop: 80
  },
  textoPrincipal: {
    fontSize: 40,
    color: '#FF0000',
    textAlign: 'center',
    margin: 10,

  },
  conta: {
    fontSize: 150,
    color: 'white',
    textAlign: 'center',
    margin: 50,
    backgroundColor: '#2be252'
  },
  botaoAdd: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    margin: 20,
    backgroundColor: 'blue'
  },

  botaoRemover: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    margin: 20,
    backgroundColor: 'red'
  }
});





export default App;