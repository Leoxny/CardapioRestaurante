import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import Stack from './index'
import Login from '../components/Login'
import CustomDrawer from '../components/CustomDrawer';

import { Entypo, Feather, Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return(

    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={
        {
            headerTitleAlign: 'center',
            headerShown: false,
        }
    }
    >      

        <Drawer.Screen
        name="Pizza"
        component={Stack}
        options={{ 
            title: 'Pizza',
            drawerIcon: ({size, color}) => (
                <Ionicons name="pizza" size={size} color={color}/>
            ) 
        }}
        
        />

        <Drawer.Screen
        name="Fingerfoods" 
        component={Stack}
        options={{ 
            title: 'Petiscos', 
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../asset/Icons/petisco.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
                ),
        }}
        />

        <Drawer.Screen 
        name="Dessert" 
        component={Stack}
        options={{ 
            title: 'Sobremessa',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../asset/Icons/sobremessa.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
                ), 
        }}
        />       

        <Drawer.Screen 
        name="Salads" 
        component={Stack}
        options={{ 
            title: 'Saladas',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../asset/Icons/saladas.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
                ),
        }}
        />

        <Drawer.Screen
        name="Shared"
        component={Stack}
        options={{ 
            title: 'Shared App',
            drawerIcon: ({size, color}) => (
                <Entypo name="share-alternative" size={size} color={color}/>
            ) 
        }}
        
        />

    </Drawer.Navigator>

    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25, 
        height: 25,
        color: 'black'
    },
    drawer:{
        marginTop: 20
    }
  })