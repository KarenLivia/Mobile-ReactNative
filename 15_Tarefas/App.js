import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase('db_tarefa.db');

const App = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso!');
        },
        (error) => {
          console.log('error on creating table ' + error.message);
        }
      );
    });
  };

  const deleteTarefa = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa deletada com sucesso!`);
          setTarefas('');
          getTarefas();
        },
        (error) => {
          console.log('Erro ao deletar uma tarefa! ' + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Informe uma tarefa!');
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa('');
        },
        (error) => {
          console.log('Erro ao inserir uma tarefa! ' + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (sqlTxn, res) => {
          console.log('Tarefas lidas com sucesso!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        (error) => {
          console.log('Erro ao obter tarefas! ' + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#E0C097',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              marginRight: 9,
              fontSize: 20,
              color: '#CEE5D0',
              fontWeight: 'bold',
            }}>
            {item.id}.
          </Text>
          <Text style={{ fontSize: 20, color: '#CEE5D0', fontWeight: 'bold' }}>
            {item.nome}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              deleteTarefa(item.id);
            }}>
            <FontAwesome
              name="trash-o"
              size={30}
              style={{ color: '#FF7878' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  useEffect(() => {
    async function fetchData() {
      await createTables();
      await getTarefas();
    }
    fetchData();
  }, []);

  return (
    <View style={{ paddingTop: 25 }}>
      <StatusBar backgroundColor="white" />
      <Text style={styles.titulo}>Tarefas</Text>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#CEE5D0',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <TextInput
          placeholder="Informe uma tarefa: "
          value={tarefa}
          onChangeText={setTarefa}
          style={{ marginHorizontal: 8, color: 'white', fontSize: 18 }}
        />

        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 'auto',
            marginRight: 10,
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={incluirTarefa}>
            <MaterialIcons
              name="add-task"
              size={30}
              style={{ color: '#E0C097' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList data={tarefas} renderItem={renderTarefa} key={(t) => t.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: '#FF7878',
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
  },
});

export default App;
