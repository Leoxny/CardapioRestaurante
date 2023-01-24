import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../components/Header';

export default function Fingerfoods({navigation}) {
 return (
  <SafeAreaView style={styles.container}>
  <Header/>
  <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.boxContainer}>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationAboriginal')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/aboriginal.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Aboriginal Chicken</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationChapa')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/chapa.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Aoc a Chapa de carne</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationWings')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/frango.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Chicken wings</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationOnion')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/onion.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Didge Onion</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationPotato')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/potato.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Didge style potato</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationFish')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/fish.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Fish and chips</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationPorkBites')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/pork.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Pork Bites</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationShark')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/shark.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Shark Bites</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationTasmanian')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/tasmanin.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Tasmanian Chicken</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationUluru')}>
            <Image style={styles.image} source={require('../../asset/image/Fingerfoods/uluru.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Uluru Mignon</Text>
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
    height: '60%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  inner:{
    flex: 1,
  }
})