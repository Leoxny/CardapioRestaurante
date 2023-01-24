import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App({navigation}) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  // const [acount, setAcount] = useState({
  //   input: '',
  //   user: '',
  //   password: '',
  // })

  const validacao = () => {

    let navegacao = navigation.navigate('Home')

    if(user !== ''){
      alert("Usuário não pode ficar em branco")
    }else if(password !== ''){
      alert("Senha não pode ficar em branco")
    }else{
      setUser(navegacao)
    }
  
  }

  return (
    <View style={styles.container}>

      <View style={styles.contImage}>
        <Image
          style={styles.image}
          source={require('../../asset/Image/fundo/didge.png')}
        />
      </View>

      <View style={styles.contInput}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={user}
          //onChangeText={}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          //onChangeText={senha}
        />
      </View>

      <TouchableOpacity onPress={validacao}>
        <Text style={styles.Login}>Login</Text>
      </TouchableOpacity>   

      <View style={styles.text}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text>
              Não tem uma conta? <Text style={styles.link}>Crie uma</Text> 
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
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 50,
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
    alignItems: 'center'
  },
  link:{
    color: 'blue',
  }
});
