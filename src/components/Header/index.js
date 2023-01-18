import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Entypo, FontAwesome5,  FontAwesome, Ionicons} from '@expo/vector-icons'

//const [text, setText] = useState('')

export default function Header() {
 return (
    <SafeAreaView style={styles.container}>
        <View style={styles.cabecalho}>
            <Ionicons
            name="search"
            color="#d3d3d3"
            style={styles.icon}
            />
            <TextInput
            style={styles.Input}
            placeholder='Pesquisar'
            autoCapitalize='none'
            autoCorrect={false}
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20
    },
    cabecalho:{
        flexDirection: 'row',
        width: 380,
        height: 40,
        backgroundColor: '#eeee',
        borderRadius: 20,
        marginLeft: 15,
        paddingHorizontal: 10
    },
    icon:{
        fontSize: 25,
        top: 3,
        margin: 3
    },
    Input:{
        fontSize: 16,
        marginLeft: 5,
    }
  })