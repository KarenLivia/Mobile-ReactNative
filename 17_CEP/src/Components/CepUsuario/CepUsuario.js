import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import style from '../../style'

export default class CepUsuario extends Component {
  render() {
    const { cep, logradouro, bairro, localidade, uf } =  this.props.data
    return(
      <View style={style.cepShowed}>
        <Text style={style.txtCep}>Cep: { cep }</Text>
        <Text style={style.txtCep}>Logradouro: { logradouro }</Text>
        <Text style={style.txtCep}>Bairro: { bairro }</Text>
        <Text style={style.txtCep}>Cidade: { localidade }</Text>
        <Text style={style.txtCep}>Estado: { uf }</Text>
      </View>
    )
  }
}