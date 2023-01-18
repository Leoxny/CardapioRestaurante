import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo, Feather, Ionicons} from '@expo/vector-icons'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View style={styles.content}>
                <Feather name="user" size={50} color={'black'} />
            </View>
            <Text>___________________________________</Text>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        marginTop: 45
    },
    content:{
        width: 80,
        height: 80,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 88/2,
        marginLeft: 18
    }
})