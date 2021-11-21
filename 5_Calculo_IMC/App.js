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
    parseFloat(texto)
    this.setState({ n1: texto });
  }

  pegaN2(texto) {
    parseFloat(texto)
    this.setState({ n2: texto });
  }

  calc() {
    this.setState({
      result: this.state.n1 / (this.state.n2*this.state.n2) 
    }
    )
    if (this.state.result <  18.5) {
      this.setState({ msg: 'Abaixo do Peso' })

    }
    else if(this.state.result >= 18.5 && this.state.result <= 24.9){
      this.setState({ msg: 'Peso normal' })
    }
    else if(this.state.result >= 25 && this.state.result <= 29.9){
      this.setState({ msg: 'Sobrepeso' })
    }
    else if(this.state.result >= 30 && this.state.result <= 34.9){
      this.setState({ msg: 'Obesidade nivel I' })
    }
    else if(this.state.result >= 35 && this.state.result <= 39.9){
      this.setState({ msg: 'Obesidade nivel II' })
    }
    else{
      this.setState({ msg: 'Obesidade Mórbida' })
    }
  }
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4J7DxdFtWrGFLjqy4zsoeS7L9L7S0L8MjIQ&usqp=CAU ' }}
          style={{
            width: 400, height: 200,
          }}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Peso
          </Text>
          <TextInput
            style={styles.inputNum}
            onChangeText={(texto) => this.setState({ n1: texto })
            }
          />
          <Text style={styles.sectionDescription}>
            Altura
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
