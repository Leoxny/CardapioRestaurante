import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Drinks({navigation}) {
 return (
  <View style={styles.container}>
    <View>
      <Image
        style={styles.image}
        source={require('../../asset/caipirinha-cadareceita.jpg')}
      />
      <Text style={styles.texto}>Caipirinha de limão</Text>
    </View>
    <View>
      <Image
        style={styles.image}
        source={require('../../asset/jasmine.jpg')}
      />
      <Text style={styles.texto}>Jasmine Margarita</Text>
    </View>
    <View>
      <Image
        style={styles.image}
        source={require('../../asset/gilmet.jpg')}
      />
      <Text style={styles.texto}>Gilmet Cocktail</Text>
    </View>
 </View>
  );
}

const styles = StyleSheet.create({
    container:{
      //flexDirection: 'row',
      backgroundColor: 'white',
      flex: 1
    },
    image:{
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent:'flex-start',
      height: 150,
      width: 150,
      marginTop: 15,
      marginLeft: 30,
    },
    texto: {
      fontSize: 16,
      marginLeft: 30,
      alignItems: 'center',
      fontWeight: 'bold',
    }
})