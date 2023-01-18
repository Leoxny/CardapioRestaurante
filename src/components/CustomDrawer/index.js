import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo, Feather, Ionicons} from '@expo/vector-icons'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// import { Container } from './styles';

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>
            <View style={styles.content}>
                <Feather name="user" size={35} color={'black'} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
            <Text></Text>
        </View>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        marginTop: 30
    },
    content:{
        width: 44,
        height: 44,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44/2,
    }
})