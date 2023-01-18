import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

export default function InformationDrinks() {
 return (
   <View style={styles.container}>
        <View>
            <Image
            style={styles.image}
            source={require('../../../asset/Drinks/beach.png')}
            />
            <Text style={styles.about}>Sex on the beach</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.desc}>Sex on the Beach é uma bebida alcoólica geralmente feita com vodka, schnapps de pêssego, suco de laranja, e suco de oxicoco, apesar de haver variações, 
            como a versão sem álcool nomeada Virgins on the Beach. É um coquetel oficial da International Bartenders Association, servido em copo alto.
            </Text>
        </View>
        <View style={styles.prec}>
            <Text style={styles.title}>Preço</Text>
            <Text style={styles.desc}>R$ 28,00</Text>
        </View>
        <TouchableOpacity style={styles.handleAdd}>
            <Text style={styles.handleAddText}>Pronto</Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width: '100%',
        height: 300
    },
    desc:{
        fontWeight: 'bold',
        fontSize: 16
    },
    title:{
        fontSize: 18,
        color: '#a9a9a9',
        fontWeight: 'bold'
    },
    colum:{
        marginEnd: 15,
        marginStart: 15,
        marginBottom: 10,
        top: -30
    },
    prec:{
        marginEnd: 15,
        marginStart: 15,
        top: -30
    },
    about:{
        marginStart: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        top: -50
    },
    handleAdd:{
        backgroundColor: '#00bfff',
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      handleAddText:{
        color: '#fff',
        fontSize: 15,
      },


})