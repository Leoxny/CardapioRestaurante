import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

export default function InformationDrinks() {
 return (
   <View style={styles.container}>
        <View>
            <Image
            style={styles.image}
            source={require('../../../asset/Drinks/twits.jpg')}
            />
            <Text style={styles.about}>Twist de melancia e morango</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.desc}>ara amenizar os dias quentes, nada melhor do que se refrescar com um bom drinque. Por isso, 
            a Red Bull sugere três receitas não alcoólicas deliciosas e fáceis de fazer em casa.
            </Text>
        </View>
        <View style={styles.prec}>
            <Text style={styles.title}>Preço</Text>
            <Text style={styles.desc}>R$ 27,00</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        top: -40
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