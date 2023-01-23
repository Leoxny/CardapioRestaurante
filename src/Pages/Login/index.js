import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  var usuario = "leonardo"
  var senha = "123456"


  return (
    <View style={styles.container}>

      <View style={styles.contImage}>
        <Image
          style={styles.image}
          source={require('../../asset/fundo/didge.png')}
        />
      </View>

      <View style={styles.contInput}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={user}
          onChangeText={usuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={senha}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.Login}>Login</Text>
      </TouchableOpacity>   

      <View style={styles.text}>
        <Text>
            Não tem uma conta? Crie uma
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  contImage:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 130,
  },
  contInput:{
    justifyContent: 'center',
  },
  input:{
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 20,
  },
  Login:{
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  }
});
