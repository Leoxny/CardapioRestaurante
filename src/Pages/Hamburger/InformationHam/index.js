import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

export default function InformationSteaks() {
 return (
   <View style={styles.container}>
        <View>
            <Image
            style={styles.image}
            source={require('../../../asset/image/Ham/classic.jpg')}
            />
            <Text style={styles.about}>Classic Burger</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.desc}>O nostálgico e tradicional burger... Pão, Angus burger, queijo, alface americana, com cebola roxa e tomates picados. 
            Acompanha maionese de ervas e batata frita à sua escolha.
            </Text>
        </View>
        <View style={styles.prec}>
            <Text style={styles.title}>Preço</Text> 
            <Text style={styles.desc}>R$ 45,00</Text>
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
        backgroundColor: '#c0c0c0',
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      handleAddText:{
        color: 'black',
        fontSize: 15,
      },


})