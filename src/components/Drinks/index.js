import React from 'react';
import { View, Text } from 'react-native';

export default function Drinks() {
 return (
   <View style={styles.container}>
    <Text>Drinks</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})