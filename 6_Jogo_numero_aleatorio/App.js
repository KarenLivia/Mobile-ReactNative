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
      msg: ''

    }
  }

  pegaN1(texto) {
    parseFloat(texto)
    this.setState({ n1: texto });
  }



  calc() {
    this.setState({
      n2: Math.floor(Math.random() * 2)
    }
    )

    if (this.state.n1 == this.state.n2) {
      this.state.msg = 'Parabens vc acertou o número sorteado!!!'
    }
    else {
      this.state.msg = 'Vc errou o número sorteado!!!'

    }

  }
  render() {
    return (
      <View>
        <Text style={styles.sectionDescription}>
          Jogo do número aleatório          </Text>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/batman/images/3/32/Charada.png/revision/latest/scale-to-width-down/265?cb=20150430140527&path-prefix=pt-br' }}
          style={{
            width: 400, height: 200,
          }}
        />
        <View style={styles.sectionContainer}>

          <Text style={styles.sectionDescription}>
            Pense em número de 0 a 10:
          </Text>
          <TextInput
            keyboardType='number-pad'

            style={styles.inputNum}
            onChangeText={(texto) => this.setState({ n1: texto })}
          />
          <Pressable
            style={styles.botao}
            onPress={() => this.calc()}
          >
            <Text style={styles.alinhar}>
              Descobrir
            </Text>
          </Pressable>
          <Text style={styles.sectionDescription}>Resultado: {this.state.n2}</Text>
          <Text style={styles.sectionDescription}>  {this.state.msg}</Text>

        </View>
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
    fontSize: 30
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
    fontSize: 34

  },
  marginAlinhada: {
    margin: 100
  }
});

export default App;
