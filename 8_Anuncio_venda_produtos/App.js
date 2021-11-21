import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Image, ScrollView } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { id: 1, name: 'Notebook Lenovo Ideapad i5', price: "2.700,00"  },
        { id: 2, name: 'Tablet Samsung 5', price: "950,00" },
        { id: 3, name: 'Celular Zenphone 5 64G', price: "1.600,00"},

      ]
    }
  }

  render() {
    return (


      <View style={styles.container}>
        <Text style={styles.h1}>
          Anúncios
        </Text>
        <FlatList
          horizontal={true}
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Produto registro={item} />}
        />

      </View>


    )
  }
}


class Produto extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: `${this.props.registro.img}` }}
          style={{
            width: 300, height: 200,

          }}
        />
        <Text>Preço: R$ {this.props.registro.price}</Text>
        <Text>Nome: {this.props.registro.name}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor:'#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold'

  }

})

export default App;


