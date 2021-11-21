import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, ScrollView } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { id: 1, name: 'Analista Desenvolvedor Backend Java Senior', salario: "8.000,00", descricao: "Analisar e desenvolver projetos de sistemas Java, levantar requisitos, mapear processos e realizar modelagem de dados, com objetivo de estudar e implementar sistemas de acordo com as regras de negócio. Analisar o desempenho de sistemas implantados, solucionar problemas técnicos e elaborar manuais.", contato: "rh@querovaga.com" },
        { id: 2, name: 'Analista Programador Front-End PHP Junior', salario: "2.500,00", descricao: "Auxiliar na ampliação de módulos e funcionalidade de um sistema desenvolvido em PHP com um Framework, módulos de gestão de projetos CRM e Call Centers.", contato: "rh@querovaga.com" },
        { id: 3, name: 'Cientista de Dados Pleno', salario: "6.000,00", descricao: "Analisar massa de dados e desenvolver modelos estatísticos. ", contato: "rh@querovaga.com" },
        { id: 4, name: 'Analista de Infraestrutura Pleno', salario: "3900,00", descricao: "Responsavel pela manutenção da infraestrutura da empresa, atendimento a chamados e documentação", contato: "rh@querovaga.com" },
        { id: 5, name: 'Analista Desenvolvedor Backend Java Senior', salario: "8.000,00", descricao: "Analisar e desenvolver projetos de sistemas Java, levantar requisitos, mapear processos e realizar modelagem de dados, com objetivo de estudar e implementar sistemas de acordo com as regras de negócio. Analisar o desempenho de sistemas implantados, solucionar problemas técnicos e elaborar manuais.", contato: "rh@querovaga.com" },
        { id: 6, name: 'Analista Programador Front-End PHP Junior', salario: "2.500,00", descricao: "Auxiliar na ampliação de módulos e funcionalidade de um sistema desenvolvido em PHP com um Framework, módulos de gestão de projetos CRM e Call Centers.", contato: "rh@querovaga.com" },
        { id: 7, name: 'Cientista de Dados Pleno', salario: "6.000,00", descricao: "Analisar massa de dados e desenvolver modelos estatísticos. ", contato: "rh@querovaga.com" },
        { id: 8, name: 'Analista de Infraestrutura Pleno', salario: "3900,00", descricao: "Responsavel pela manutenção da infraestrutura da empresa, atendimento a chamados e documentação", contato: "rh@querovaga.com" },
        { id: 9, name: 'Analista Desenvolvedor Backend Java Senior', salario: "8.000,00", descricao: "Analisar e desenvolver projetos de sistemas Java, levantar requisitos, mapear processos e realizar modelagem de dados, com objetivo de estudar e implementar sistemas de acordo com as regras de negócio. Analisar o desempenho de sistemas implantados, solucionar problemas técnicos e elaborar manuais.", contato: "rh@querovaga.com" },
        { id: 10, name: 'Analista Programador Front-End PHP Junior', salario: "2.500,00", descricao: "Auxiliar na ampliação de módulos e funcionalidade de um sistema desenvolvido em PHP com um Framework, módulos de gestão de projetos CRM e Call Centers.", contato: "rh@querovaga.com" },
        { id: 11, name: 'Cientista de Dados Pleno', salario: "6.000,00", descricao: "Analisar massa de dados e desenvolver modelos estatísticos. ", contato: "rh@querovaga.com" },
        { id: 12, name: 'Analista de Infraestrutura Pleno', salario: "3900,00", descricao: "Responsavel pela manutenção da infraestrutura da empresa, atendimento a chamados e documentação", contato: "rh@querovaga.com" },

      ]
    }
  }

  render() {
    return (


      <View style={styles.container}>
        <Text style={styles.h1}>
          Vagas
        </Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Vaga registro={item} />}
        />
      </View>


    )
  }
}


class Vaga extends Component {
  render() {
    return (
      <View style={styles.boxView}>

        <Text style={{
          fontSize: 25
        }}>{this.props.registro.name}</Text>
        <Text>Salario: {this.props.registro.salario}</Text>
        <Text>Descrição: {this.props.registro.descricao}</Text>
        <Text>Contato: {this.props.registro.contato}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

  },
  h1: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold'

  },
  boxView: {
    margin: 20,
    backgroundColor: '#aff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 30,
  }

})

export default App;


