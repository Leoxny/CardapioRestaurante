import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function InformationDrinks() {
 return (
   <View style={styles.container}>
        <View>
            <Image
            style={styles.image}
            source={require('../../../asset/caipirinha-cadareceita.jpg')}
            />
            <Text>Caipitinha de Limão</Text>
        </View>
        <View style={styles.colum}>
            <Text style={styles.title}>Descrição</Text>
            <Text style={styles.desc}>A caipirinha é uma bebida alcoólica brasileira, ou um coquetel de origem paulista, 
                feita com cachaça, limão, açúcar e gelo. Variações incluem a caipiroska - com vodka ao invés de cachaça - 
                e a caipiríssima - com rum
            </Text>
        </View>
        <View style={styles.prec}>
            <Text style={styles.title}>Preço</Text>
            <Text style={styles.desc}>R$ 10,00</Text>
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

    },
    prec:{

    },
    title:{
        fontSize: 18
    },
    colum:{

    }
})