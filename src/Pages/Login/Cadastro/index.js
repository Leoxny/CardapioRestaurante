import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConPassword] = useState('')
  const [email, setEmail] = useState('')

  return (

    <View style={styles.container}>

      <View style={styles.contImage}>
        <Image
          style={styles.image}
          source={require('./assets/Image/didge.png')}
        />
      </View>

      <View style={styles.contInput}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(user) => setEmail(user)}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={user}
          onChangeText={(user) => setUser(user)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          secureTextEntry
          onChangeText={(pass) => setPassword(pass)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confPassword}
          secureTextEntry
          onChangeText={(pass) => setConPassword(pass)}
        />
      </View>

      <TouchableOpacity >
        <Text style={styles.Login}>Create account</Text>
      </TouchableOpacity>

      <View>
        <Text>
            Você já tem uma conta? Login
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
