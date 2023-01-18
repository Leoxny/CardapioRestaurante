import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

export default function Drinks() {
 return (
   <View style={styles.container}>
    <Header/>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      //flexDirection: 'row',
      flex: 1
    },
})