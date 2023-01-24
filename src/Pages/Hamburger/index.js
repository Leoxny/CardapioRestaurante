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
          <TouchableOpacity onPress={() => navigation.navigate('InformationHam')}>
            <Image style={styles.image} source={require('../../asset/Image/Ham/classic.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Classic Burger</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationOzzy')}>
            <Image style={styles.image} source={require('../../asset/Image/Ham/ozzy.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Ozzy Burger</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationPepp')}>
            <Image style={styles.image} source={require('../../asset/Image/Ham/burger.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Pepperoni Burger</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationRibs')}>
            <Image style={styles.image} source={require('../../asset/Image/Ham/ribs.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Ribs Steack Sandwich</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationSmoke')}>
            <Image style={styles.image} source={require('../../asset/Image/Ham/smoke.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Smoked Burger</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationVegg')}>
            <Image style={styles.image} source={require('../../asset/Image/Ham/veggie.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Veggie</Text>
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
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  inner:{
    flex: 1,
  }
})