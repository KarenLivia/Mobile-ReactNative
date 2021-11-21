import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Infos({route}) {
    const navigation = useNavigation();
   return (
     <View style={styles.container}>

        <View style={styles.row}> 
          <Text style={styles.titulo}>{route.params?.nome}</Text>
          <Feather style={{marginLeft: 10}} name='film' size={35} />
        </View>
        

        <View>
            <Text style={styles.tituloFilme}>
                Sinopse
            </Text>
            <Text style={styles.texto}>
            {route.params?.sinopse}
            </Text>
        </View>

        <TouchableOpacity style={styles.linha2}
            onPress={() => {
            navigation.goBack();
            }}
        >
            <AntDesign name='back' size={25} />
            <Text style={styles.texto}>
                    Voltar
            </Text>
        </TouchableOpacity>

    </View>
   )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    titulo: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 50
    },
    row: {
      flexDirection: 'row',
      justifyContent: "center"
    },
    texto: {
        fontSize: 18,
        margin: 20,
        textAlign: 'justify'
    },
    linha2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    tituloFilme: {
      fontSize: 18,
      fontWeight: '700',
      marginLeft: 20,
    },
  });