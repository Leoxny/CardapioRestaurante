import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Drinks({navigation}) {
 return (
  <View style={styles.container}>

    <TouchableOpacity onPress={() => navigation.navigate('InformationDrinks')}>
      <View>
        <Image
          style={styles.image}
          source={require('../../asset/caipirinha-cadareceita.jpg')}
        />
        <Text style={styles.texto}>Caipirinha de limão</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('InformationDrinks')}>
    <View>
      <Image
        style={styles.image}
        source={require('../../asset/jasmine.jpg')}
      />
      <Text style={styles.texto}>Jasmine Margarita</Text>
    </View>
    </TouchableOpacity>

    {/* <TouchableOpacity onPress={() => navigation.navigate('InformationDrinks')}>
      <View>
        <Image
          style={styles.image}
          source={require('../../asset/gilmet.jpg')}
        />
        <Text style={styles.texto}>Gilmet Cocktail</Text>
      </View>
    </TouchableOpacity> */}

 </View>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      flexDirection: 'row',
      flex: 1
    },
    image:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 150,
      width: 180,
      marginTop: 15,
      margin: 12,
      borderRadius: 10,
    },
    texto: {
      fontSize: 18,
      marginLeft: 15,
      fontWeight: 'bold',
    }
})