import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/Header';

export default function Steaks({navigation}) {
 return (
  <SafeAreaView style={styles.container}>
  <Header/>
  <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.boxContainer}>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationDrinksLimon')}>
            <Image style={styles.image} source={require('../../asset/Drinks/caipirinha-cadareceita.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Gravy Mignon</Text>
        </View>
      </View>

    </View>
  </ScrollView>
</SafeAreaView>

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
    margin: 5,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 'bold',
    top: -8
  },
  box:{
   width: '50%',
   height: '30%',
   padding: 5,
  },
  boxContainer:{
    width: '100%',
    height: '45%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  inner:{
    flex: 1,
  }
})