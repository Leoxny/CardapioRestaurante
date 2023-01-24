import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import { Entypo, Feather, Ionicons, FontAwesome5} from '@expo/vector-icons'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView 
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
            <ImageBackground source={require('../../asset/Image/fundo/menu.jpg')} style={{padding: 20}}>
                <View style={styles.content}>
                    <Feather name="user" size={45}/>
                </View>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>Leonardo Flach</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff'}}>280 Coins</Text>
                    <FontAwesome5 name="coins" size={14} color="#fff" style={{marginLeft: 5, marginTop: 2}}/>
                </View>
            </ImageBackground>
            <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style={styles.linha}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="enter-outline" size={23}/>
                    <Text style={{fontSize: 15, marginLeft: 5, top: -1, fontWeight: 'bold'}}>Sing in</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name="exit-outline" size={23}/>
                    <Text style={{fontSize: 15, marginLeft: 5, top: -1, fontWeight: 'bold'}}>Sing Out</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="share-alternative" size={22}/>
                    <Text style={{fontSize: 15, marginLeft: 5, top: 2, fontWeight: 'bold'}}>Share App</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    content:{
        width: 80,
        height: 80,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 80/2,
    },
    linha:{
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    }
})