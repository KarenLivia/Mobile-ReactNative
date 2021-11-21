import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
      de: 'BRL',
      para: 'USD',
      resultado: [],
    };
    this.converter = this.converter.bind(this);
  }

  async converter() {
    if (this.state.valor == '') {
      this.setState({ resultado: 'Digite o valor:' });
    } else {
      let valor = parseInt(this.state.valor);
      let de = this.state.de;
      let para = this.state.para;
      let final = this.state.de + this.state.para;
      console.log(this.state.valor, this.state.de, this.state.para);
      let response = await api.get(
        `https://economia.awesomeapi.com.br/json/last/${de}-${para}`
      );
      var resultado = 0;

      switch (de) {
        case 'BRL':
          switch (para) {
            case 'USD':
              resultado = (response.data.BRLUSD.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.BRLEUR.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'USD':
          switch (para) {
            case 'BRL':
              resultado = (response.data.USDBRL.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.USDEUR.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'EUR':
          switch (para) {
            case 'USD':
              resultado = (response.data.EURUSD.bid * valor).toFixed(2);
              break;
            case 'BRL':
              resultado = (response.data.EURBRL.bid * valor).toFixed(2);
              break;
          }
          break;
        case 'BTC':
          switch (para) {
            case 'USD':
              resultado = (response.data.BTCUSD.bid * valor).toFixed(2);
              break;
            case 'EUR':
              resultado = (response.data.BTCEUR.bid * valor).toFixed(2);
              break;
            case 'BRL':
              resultado = (response.data.BTCBRL.bid * valor * 1000).toFixed(2);
              break;
          }
          break;
      }
      console.log(resultado);
      this.setState({
        resultado: resultado,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Conversor de Moedas <FontAwesome5 name="coins" size={20} color="white" /></Text>
        <View style={styles.grupo}>
          <Text style={styles.texto}>Valor</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Digite o valor"
            value={this.state.valor}
            onChangeText={(value) => {
              this.setState({ valor: value });
            }}
          />
        </View>
        <View style={styles.grupo}>
          <Text style={styles.texto}>De</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.de}
            onValueChange={(valor) => {
              this.setState({ de: valor });
            }}>
            <Picker.Item key={1} value={'BRL'} label="Real" />
            <Picker.Item key={2} value={'EUR'} label="Euro" />
            <Picker.Item key={3} value={'USD'} label="Dólar" />
            <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
          </Picker>
        </View>
        <View style={styles.grupo}>
          <Text style={styles.texto}>Para</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.para}
            onValueChange={(valor) => {
              this.setState({ para: valor });
            }}>
            <Picker.Item key={1} value={'BRL'} label="Real" />
            <Picker.Item key={2} value={'EUR'} label="Euro" />
            <Picker.Item key={3} value={'USD'} label="Dólar" />
            <Picker.Item key={4} value={'BTC'} label="Bitcoin" />
          </Picker>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 60,
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: '#00A19D',
            borderColor: '#00A19D',
            color: 'white',
            padding: 15,
            marginLeft: 10,
            borderWidth: 1,
            flexDirection: 'row',
            margin: 10,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
          }}
          onPress={this.converter}>
          <Text
            style={{
              fontSize: 22,
              marginRight: 10,
              color: 'white',
              alignItems: 'center',
            }}>
            Converter
          </Text>
          <AntDesign name="swap" size={30} color="white" />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 26,
              margin: 10,
              color: '#FFB344',
              textAlign: 'center',
            }}>
            {this.state.resultado}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#00A19D',
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF8E5',
  },
  input: {
    width: '70%',
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    marginLeft: 25,
    fontSize: 20,
    padding: 10,
    color: 'white',
    borderColor: '#FFB344',
    backgroundColor: '#FFB344',
    textAlign: 'center',
    marginTop: 30,
  },
  grupo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  texto: {
    fontSize: 25,
    color: '#E05D5D',
    marginTop: 30,
  },
  picker: {
    fontSize: 30,
    color: '#FFB344',
    marginTop: 25,
    marginLeft: 30,
    width: 120,
  },
});

export default App;
