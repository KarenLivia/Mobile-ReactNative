import React, { Component } from 'react';

import { View, Text, Image, Button, StyleSheet, Pressable, TextInput } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.calc.bind;
    this.pegaN1.bind;
    this.state = {
      n1: 0.0,
      n2: 0.0,
      result: 0.0,
      msg: ''

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
      result: this.state.n1 / this.state.n2
    }
    )
    if (this.state.result > 0.7) {
      this.setState({ msg: 'Alcool' })

    }
    else {
      this.setState({ msg: 'Gasolina' })
    }
  }
  render() {
    return (

      <View >
        <Image
          source={{ uri: 'https://i1.wp.com/veiculosnaweb.com.br/wp-content/uploads/2019/07/gasolina-alcool-min-1.jpg?fit=772%2C323&ssl=1' }}
          style={{
            width: 400, height: 200,
          }}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Alcool
          </Text>
          <TextInput
            style={styles.inputNum}
            onChangeText={(texto) => this.setState({ n1: texto })
            }
          />
          <Text style={styles.sectionDescription}>
            Gasolina
          </Text>
          <TextInput
            style={styles.inputNum}
            onChangeText={(texto) => this.setState({ n2: texto })}
          />
          <Pressable
            style={styles.botao}
            onPress={() => this.calc()}
          >
            <Text style={styles.alinhar}>
              Calcular
            </Text>
          </Pressable>
          <Text style={styles.sectionDescription}>Resultado: {this.state.result}</Text>
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
    fontSize: 35

  },
  marginAlinhada: {
    margin: 100
  }
});

export default App;
