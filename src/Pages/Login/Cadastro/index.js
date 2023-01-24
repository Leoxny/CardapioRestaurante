import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App({navigation}) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConPassword] = useState('')
  const [email, setEmail] = useState('')

  const validacao = () => {

    let navegacao = navigation.navigate('Login')

    if(user !== ''){
      alert("Preencha o campo")
    }else if(password !== ''){
      alert("Preencha o campo")
    }else if(email !== ''){
      alert("Preencha o campo")
    }else if(confPassword !== ''){
      alert("Preencha o campo")
    }

    setUser(navegacao)
  }

  return (

    <View style={styles.container}>

      <View style={styles.contImage}>
        <Image
          style={styles.image}
          source={require('../../../asset/Image/fundo/didge.png')}
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

      <TouchableOpacity onPress={validacao}>
        <Text style={styles.Login}>Logar</Text>
      </TouchableOpacity>

      <View style={styles.text}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>
              Você já tem uma conta? <Text style={styles.link}>Login</Text>
          </Text>
        </TouchableOpacity>
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
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 40,
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
  },
  text:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  link:{
    color: 'blue',
  }
});
