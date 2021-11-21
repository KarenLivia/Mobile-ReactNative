import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.mostrarDados.bind
    this.state = {
      nome: '',
      idade: 0,
      sexo: 'Prefiro não declarar',
      escolaridade: '',
      brasileiro: false,
      valor: 0,
      dados: '',
      nacionalidade: ''
    };


  };


  mostrarDados() {
    if (this.state.brasileiro == true) {
      this.state.nacionalidade = 'Brasileira'
    }
    else {
      nacionalidade = 'Estrangeira'
    }
    this.setState({
      dados:

        'Nome: ' + this.state.nome + '\n'
        + 'Idade: ' + this.state.idade + '\n'
        + 'Sexo: ' + this.state.sexo + '\n'
        + 'Escolaridade: ' + this.state.escolaridade + '\n'
        + 'Nacionalidade: ' + this.state.nacionalidade + '\n'
        + 'Limite: R$' + this.state.valor + ',00'
    })
  }

  render() {

    return (
      <ScrollView>

        <View style={styles.container}>

          <Text style={styles.header}>Abertura de Conta</Text>
          <View style={styles.boxCont}>
            <Text style={styles.h1}>Nome: </Text>
            <TextInput
              style={styles.entrada}
              onChangeText={(texto) => this.setState({ nome: texto })}
            />
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.h1}>Idade: </Text>
            <TextInput
              style={styles.entrada}
              onChangeText={(texto) => this.setState({ idade: texto })}
            />
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.h1}>Sexo: </Text>
            <Picker
              style={{
                marginLeft: 30
              }
              }
              selectedValue={this.state.sexo}
              //onChangeText={(texto) => this.setState({ sexo: texto })}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
            >
              <Picker.Item key={1} value={"Prefiro Não Declarar"} label="Prefiro Não Declarar" style={styles.h2} />
              <Picker.Item key={2} value={"Masculino"} label="Masculino" style={styles.h2} />
              <Picker.Item key={3} value={"Feminino"} label="Feminino" style={styles.h2} />
            </Picker>

          </View>


          <View style={styles.boxCont}>
            <Text style={styles.h1}>Escolaridade: </Text>
            <Picker style={{
              marginLeft: 30
            }
            }
              selectedValue={this.state.escolaridade}

              //onChangeText={(texto) => this.setState({ sexo: texto })}
              onValueChange={(itemValue, itemIndex) => this.setState({ escolaridade: itemValue })}
            >
              <Picker.Item key={1} value={"Ensino Fundamental"} label="Ensino Fundamental" style={styles.h3} />
              <Picker.Item key={2} value={"Ensino Médio"} label="Ensino Médio" style={styles.h3} />
              <Picker.Item key={3} value={"Ensino Superior"} label="Ensino Superior" style={styles.h3} />
            </Picker>
          </View>


          <View style={styles.boxCont}>
            <Text style={styles.h1}>Brasileiro: </Text>
            <Switch
              style={
                {
                  marginRight: 300
                }
              }
              value={this.state.brasileiro}
              onValueChange={(valorSwitch) => this.setState({ brasileiro: valorSwitch })}
              thumbColor='orange'
              onChangeText={(texto) => this.setState({ brasileiro: texto })}

            />
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.h1}>Limite: </Text>

            <Slider
              style={
                { marginLeft: 30 }
              }
              minimumValue={100}
              maximumValue={1000}
              onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
              value={this.state.valor}
              step={10}
              minimumTrackTintColor='blue'
              maximumTrackTintColor='green'
              thumbTintColor='orange'
            />


            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              {this.state.valor.toFixed(0)}
            </Text>
          </View>
        </View>

        <Pressable
          style={styles.botao}
          onPress={() => this.mostrarDados()}
        >
          <Text style={styles.textoBtn}>Confirmar</Text>
        </Pressable>
        <Text style={styles.header}>Dados Informados: </Text>
        <Text style={styles.h2}>{this.state.dados}</Text>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  entrada: {
    width: 300,
    backgroundColor: '#ddd',
    borderRadius: 10,
    fontSize: 20,
    marginLeft: 25
  },
  h1: {
    fontSize: 20,
    margin: 5

  },
  h2: {
    fontSize: 20,
    margin: 20,
    marginLeft: 30
  },
  h3: {
    fontSize: 18,
    margin: 20,
    marginLeft: 100
  },
  botao: {
    backgroundColor: 'green',
    color: 'white',
    width: 150,
    textAlign: 'center',
    borderRadius: 10,
    marginLeft: 120,
    marginBottom: 100,
    marginTop: 50
  },
  textoBtn: {
    color: 'white',
    width: 150,
    textAlign: 'center',
    fontSize: 25
  },
  boxCont: {
    backgroundColor: "#836fff",
    borderRadius: 10,
    margin: 10,
    padding: 20
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    margin: 5
  }
});
