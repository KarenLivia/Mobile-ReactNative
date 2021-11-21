import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={
          {
            backgroundColor: '#2E2E2E',
            height: 1000
          }
        }
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            color: 'white',
            padding: 20
          }}

        >
          Karen Livia Alves

        </Text>

        <Image
            style={{
            width: 250, height: 250,
            flexDirection: 'column',
            marginLeft: 80,
            marginTop: 20,
            borderRadius: 150


          }}
        />

        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}

        >
         Idade: 32

        </Text>

        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}

        >
        Residente: Santos/SP

        </Text>
        
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 0
          }}

        >
         Formação: Análise e Desenvolvimento de Sistemas e Sistemas Para Internet

        </Text>

        
        
        
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}

        >
         Experiência Profissional: Analista em teste de qualidade de software, ModalGR

        </Text>

   


        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            padding: 5
          }}
          
        >
        GitHub:  https://github.com/KarenLivia

        </Text>
      </View>





    )
  }
}

export default App;