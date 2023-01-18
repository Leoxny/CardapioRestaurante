import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';


export default function Drinks({ navigation }) {
  return (
    <View style={styles.container}>

      <Header/>

    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.column}>
        <TouchableOpacity onPress={() => navigation.navigate('InformationDrinks')}>
          <Image
            style={styles.image}
            source={require('../../asset/caipirinha-cadareceita.jpg')}
          />
        </TouchableOpacity>
        <Text style={styles.texto}>Caipirinha de limão</Text>
      </View>

      <View style={styles.column}>
        <TouchableOpacity onPress={() => navigation.navigate('InformationDrinks')}>
          <Image
            style={styles.image}
            source={require('../../asset/jasmine.jpg')}
          />
        </TouchableOpacity>
        <Text style={styles.texto}>Jasmine Margarita</Text>
      </View>

      <View style={styles.column}>
      <TouchableOpacity onPress={() => navigation.navigate('InformationDrinks')}>
        <Image
          style={styles.image}
          source={require('../../asset/gilmet.jpg')}
        />
        </TouchableOpacity>
        <Text style={styles.texto}>Gilmet Cocktail</Text>
      </View>
    
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  image: {
    height: 150,
    width: 180,
    marginTop: 20,
    margin: 12,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    marginLeft: 15,
    fontWeight: 'bold',
    top: -10
  },
})