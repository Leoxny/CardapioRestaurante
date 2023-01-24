import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function InformationDrinks() {
 return (
   <View style={styles.container}>
        <View>
            <Image
            style={styles.image}
            source={require('../../../asset/Image/Local/pub.jpg')}
            />
            <Text style={styles.about}>Florianópolis / SC{'\n'}Av. Beira Mar Norte 1976, Florianópolis, SC</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.title}>Telefone</Text>
            <Text style={styles.desc}>(48) 3365-6615</Text>
        </View>
        <View style={styles.prec}>
            <Text style={styles.title}>Horário de Funcionamento</Text>
            <Text style={styles.desc}>Todos os dias das 19h - 02h</Text>
        </View>
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
        fontSize: 15
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
        top: -65
    },
    prec:{
        marginEnd: 15,
        marginStart: 15,
        top: -40
    },
    about:{
        marginStart: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        top: -90
    },

})