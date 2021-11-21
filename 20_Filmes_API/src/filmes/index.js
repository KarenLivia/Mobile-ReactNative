import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../src/services/api.js';


export default function Filmes({navigation}) {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(async()=>{
    const response = await api.get("r-api/?api=filmes");
    setFilmes(response.data)
    setLoading(false);
  },[])


    if(loading) {
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )
    } else{
    return (
      <View style={styles.container}>
        <View style={styles.row}> 
          <Text style={styles.titulo}>Filmes </Text>
          <MaterialCommunityIcons style={{marginLeft: 10}} name='movie-open-outline' size={35} />
        </View>

        <FlatList 
          data={filmes}
          keyExtractor={item => item.id.toString() }
          renderItem={ ({item}) => (
            <View style={styles.container2}>
            <ScrollView>
                <View style={styles.linha}>
                    <Text style={styles.tituloFilme}>
                        {item.nome}
                    </Text>
                    <TouchableOpacity style={styles.linha2} 
                        onPress={()=>{navigation.navigate('Infos', {sinopse: item.sinopse, nome: item.nome} )}}>
                        <Text style={styles.texto}>
                                Leia Mais
                        </Text>
                        <MaterialCommunityIcons name='bookmark-plus-outline' size={25} />
                    </TouchableOpacity>
                </View>
                <Image source={{uri: item.foto}} 
                style={styles.imagem}/>
            </ScrollView>
        </View>
          ) }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingBottom: 100,
  },
  container2: {
    marginBottom: 50,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50,
  },
  tituloFilme: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10
  },
  texto: {
    fontSize: 18,
    marginRight: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: "center"
  },
  linha: {
    flexDirection: "row", 
    justifyContent: "space-between",
  },
  linha2: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10
  },
  imagem: {
    width: 500, 
    height: 205,
    marginTop: 10,
    borderRadius: 90,
  }
});