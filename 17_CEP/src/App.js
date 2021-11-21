import React, { Component } from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import axios from 'axios'
import style from '../src/style'

import CepUsuario from '../src/Components/CepUsuario/CepUsuario'

const apiCEP = axios.create({
  baseURL: `https://viacep.com.br/ws/`
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cepDigitado: '',
      buscaIniciada: false,
      cepBuscado: '',
      loading: true,
      cepComponent: {}
    }
    this.pegarCep = this.pegarCep.bind(this)
    this.buscarCep = this.buscarCep.bind(this)
    this.renderCep = this.renderCep.bind(this)
  }

  async componentDidUpdate() {
    const showMsg = (txt) => {
      console.log('--------------------------------------------------')
      console.log(`${txt}`)
      console.log('--------------------------------------------------')
    }

    if (this.state.buscaIniciada === false)
      return null 
    else {
      try {
        const response = await apiCEP.get(`${this.state.cepBuscado}/json/`)
        this.setState({
          loading: false,
          cepComponent: response.data
        })
      } catch(error) {
        showMsg(error.message)
      }
    }
  }

  renderCep() {
    if (this.state.buscaIniciada != true) {
      return(
        <View>
          <Text>
            Digite um CEP para buscarmos informações
            a respeito do mesmo.
          </Text>
        </View>
      )
    } else {
      if(this.state.loading == true) {
        return(
          <View>
            <Text>Carregando dados do CEP...</Text>
          </View>
        )
      } else {
        return(
          <CepUsuario 
              data={{ 
                cep: this.state.cepComponent.cep,
                logradouro: this.state.cepComponent.logradouro,
                bairro: this.state.cepComponent.bairro,
                localidade: this.state.cepComponent.localidade,
                uf: this.state.cepComponent.uf
              }} 
          />
        )
      }
    }
  }

  buscarCep() {
    this.setState({ cepBuscado: this.state.cepDigitado })
    this.setState({ cepDigitado: '' })
    this.setState({ buscaIniciada: true })
  }

  pegarCep(txt) { this.setState({ cepDigitado: txt }) }

  render() {
    return(
      <View style={style.screen}>
        <Text style={style.title}>Cep X Endereço</Text>
        <View style={style.inputBox}>
            <TextInput style={style.input}
              value={ this.state.cepDigitado }
              placeholder=' Digite o CEP'
              onChangeText={ this.pegarCep }
            />
            <Pressable 
              onPress={ this.buscarCep }
              style={
                ({ pressed }) => [
                  pressed ? style.btnAtivado : style.btnDesativado
              ]}
            >
              <Text style={style.btnTxt}>Enviar</Text>
            </Pressable>
        </View>

        <View>{ this.renderCep() }</View>
      </View>
    )
  }
}