import React, { Component } from 'react';

import { View, Text, Image, Button, StyleSheet, Pressable, TextInput } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);

    this.calc.bind;
    this.pegaN1.bind;


    this.state = {
      n1: 0,
      n2: 0,
      result: 0
    }

  }

  pegaN1(texto) {
    this.setState({ n1: texto });
  }

  pegaN2(texto) {
    this.setState({ n2: texto });
  }

  calc() {
    this.setState({
      result: this.state.n1 * this.state.n2
    })
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Multiplicador
        </Text>

        <Text style={styles.sectionDescription}>
          Digite um numero
        </Text>
        <TextInput
          style={styles.inputNum}
          onChangeText={ (texto) => this.setState({n1: texto})}

        />

        <Text style={styles.sectionDescription}>
          Digite outro numero
        </Text>
        <TextInput
          style={styles.inputNum}
          onChangeText={ (texto) => this.setState({n2: texto})}

        />

        <Pressable
          style={styles.botao}
          onPress={() => this.calc()}
        >
          <Text style={styles.alinhar}>Calcular</Text>
        </Pressable>

        <Text style={styles.sectionDescription}>Resultado: {this.state.result}</Text>
      </View>
    )
  }



}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    margin: 5
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 35,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputNum: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: 300,
    height: 60,
    fontSize:30
  },
  botao: {
    backgroundColor: '#836FFF',
    width: 150,
    marginTop: 10,
    borderRadius: 10,
    textAlign: 'center',
    display: 'flex',



  },
  alinhar: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35

  },
  marginAlinhada: {
    margin: 100
  }
});

export default App;
