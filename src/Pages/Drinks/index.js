import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/Header';


export default function Drinks({ navigation }) {
  return (

    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.boxContainer}>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationDrinksLimon')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/caipirinha-cadareceita.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Caipitinha de Limão</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationDrinksMarg')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/jasmine.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Jasmine Margarita</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationGilmet')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/gilmet.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Gilmet Cocktail</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationGinTonica')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/gin.png')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Gin Tonica</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationAperol')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/aperol.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Aperol Spritz</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationBeach')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/beach.png')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Sex on the beach</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationTropical')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/tropical.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Tropical Gin</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationMojito')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/mojito.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Mojito</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationBoomerang')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/boomerang.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Boomerang</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationAbacaxi')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/abacaxi.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Caipirinha de abacaxi</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationNevada')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/caipirosca.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Caipirosca nevada</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationMorango')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/morangojpg.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Caipirinha de morango</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationLimao')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/condensado.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Caipirinha de limão</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inner}>
              <TouchableOpacity onPress={() => navigation.navigate('InformationMelancia')}>
                <Image style={styles.image} source={require('../../asset/Image/Drinks/twits.jpg')}/>
              </TouchableOpacity>
              <Text style={styles.texto}>Twist</Text>
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
    top: -3
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