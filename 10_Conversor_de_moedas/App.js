import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.converter.bind
    this.state = {
      entrada: 'Real',
      saida: 'Dolar', 
      result: 0,
      valor:0,

    };
  };
  converter(){
    if(this.state.entrada == "Dolar" && this.state.saida == "Real"){
      this.setState({
        result: this.state.valor * 5.29
      })
    }
    else if(this.state.entrada == "Real" && this.state.saida == "Dolar"){
      this.setState({
        result:  this.state.valor / 5.29
      })
    }
    else if(this.state.entrada == "Euro" && this.state.saida == "Real"){
      this.setState({
        result:  this.state.valor * 6.20 
      })
    }
    else if(this.state.entrada == "Real" && this.state.saida == "Euro"){
      this.setState({
        result:  this.state.valor / 6.20 
      })
    }
    else if(this.state.entrada == "Euro" && this.state.saida == "Dolar"){
      this.setState({
        result:  this.state.valor * 1.17 
      })
    }
    else if(this.state.entrada == "Dolar" && this.state.saida == "Euro"){
      this.setState({
        result:  this.state.valor / 1.17 
      })
    }

  }

  render() {

    return (
      <ScrollView>

        <View style={styles.container}>

          <Text style={styles.header}>Conversor de Moedas: Real, Dolar e Euro</Text>
        

          <View style={styles.boxCont}>
            <Text style={styles.h1}>Valor: </Text>
            <TextInput
              style={styles.h1}
              keyboardType="numeric"
              onChangeText={(texto) => this.setState({ valor: texto })}
            />
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.h1}>De: </Text>
            <Picker
              style={{
                marginLeft: 30
              }
              }
              selectedValue={this.state.entrada}
              //onChangeText={(texto) => this.setState({ sexo: texto })}
              onValueChange={(itemValue, itemIndex) => this.setState({ entrada: itemValue })}
            >
              <Picker.Item key={1} value={"Real"} label="Real" style={styles.h2} />
              <Picker.Item key={2} value={"Dolar"} label="Dolar" style={styles.h2} />
              <Picker.Item key={3} value={"Euro"} label="Euro" style={styles.h2} />
            </Picker>

          </View>


          <View style={styles.boxCont}>
            <Text style={styles.h1}>Para: </Text>
            <Picker style={{
              marginLeft: 30
            }
            }
              selectedValue={this.state.saida}

              onValueChange={(itemValue, itemIndex) => this.setState({ saida: itemValue })}
            >
              
              <Picker.Item key={1} value={"Real"} label="Real" style={styles.h2} />
              <Picker.Item key={2} value={"Dolar"} label="Dolar" style={styles.h2} />
              <Picker.Item key={3} value={"Euro"} label="Euro" style={styles.h2} />
            </Picker>
          </View>


        </View>

        <Pressable
          style={styles.botao}
          onPress={() => this.converter()}
        >
          <Text style={styles.textoBtn}>Converter</Text>
        </Pressable>
        <Text style={styles.header}>Resultado </Text>
        <Text style={styles.header}>{this.state.result}</Text>

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
    marginBottom: 30,
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