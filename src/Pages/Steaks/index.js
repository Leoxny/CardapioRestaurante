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
          <TouchableOpacity onPress={() => navigation.navigate('InformationSteaks')}>
            <Image style={styles.image} source={require('../../asset/Image/Steaks/mignon.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Gravy Mignon</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationPork')}>
            <Image style={styles.image} source={require('../../asset/Image/Steaks/pork.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Pork Ribs</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationRibeye')}>
            <Image style={styles.image} source={require('../../asset/Image/Steaks/ribeye.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Queensland Ribeye</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationStrip')}>
            <Image style={styles.image} source={require('../../asset/Image/Steaks/strip.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Strip Steack</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationFilet')}>
            <Image style={styles.image} source={require('../../asset/Image/Steaks/filet.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Syoney Filet</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationBone')}>
            <Image style={styles.image} source={require('../../asset/Image/Steaks/bone.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>T-Bone</Text>
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