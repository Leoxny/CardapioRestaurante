import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';

export default function Drinks({navigation}) {
 return (
   <SafeAreaView style={styles.container}>
    <Header/>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationBalSC')}>
            <Image style={styles.image} source={require('../../asset/image/Local/didge.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto}>Balneário Camboriú / SC{'\n'}Rua 4450, 143 - Centro Balneário Camboriú, SC</Text>
          <Text style={styles.desc}></Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationFloSC')}>
            <Image style={styles.image} source={require('../../asset/image/Local/pub.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto2}>Florianópolis / SC{'\n'}Av. Beira Mar Norte 1976, Florianópolis, SC</Text>
          <Text style={styles.desc2}></Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationJonSC')}>
            <Image style={styles.image} source={require('../../asset/image/Local/join.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto3}>Joinville / SC{'\n'}R. Visc. de Taunay, 368 - Atiradores, Joinville - SC</Text>
          <Text style={styles.desc3}></Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity onPress={() => navigation.navigate('InformationPoaRS')}>
            <Image style={styles.image} source={require('../../asset/image/Local/poa.jpg')}/>
          </TouchableOpacity>
          <Text style={styles.texto4}>Porto Alegue / RS{'\n'}R. Des. Augusto Loureiro Lima, 151 - Petrópolis, Porto Alegre - RS</Text>
          <Text style={styles.desc4}></Text>
        </View>
      </View>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      flex: 1
    },
    image:{
      height: 90,
      width: 90,
      marginTop: 23,
      margin: 5,
      marginLeft: 8,
      borderRadius: 90/2,
    },
    inner:{
      flexDirection: 'row',
    },
    desc:{
      marginTop: 20,
      marginLeft: -200,
      marginTop: '15%',
      fontSize: 16,
      color: '#a9a9a9',
    },
    texto:{
      marginTop: '10%',
      fontSize: 17
    },
    desc2:{
      marginTop: 20,
      marginLeft: -150,
      marginTop: '15%',
      fontSize: 16,
      color: '#a9a9a9',
    },
    texto2:{
      marginTop: '10%',
      fontSize: 17
    },
    desc3:{
      marginTop: 20,
      marginLeft: -110,
      marginTop: '15%',
      fontSize: 16,
      color: '#a9a9a9',
    },
    texto3:{
      marginTop: '10%',
      fontSize: 17
    },
    desc4:{
      marginTop: 20,
      marginLeft: -150,
      marginTop: '15%',
      fontSize: 16,
      color: '#a9a9a9',
    },
    texto4:{
      marginTop: '10%',
      fontSize: 17
    }
})