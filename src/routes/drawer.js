import { createDrawerNavigator } from '@react-navigation/drawer';

import { StyleSheet, Image } from 'react-native';

import Stack from './index'
import CustomDrawer from '../components/CustomDrawer';

import { Entypo, Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return(

    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={
        {
            headerTitleAlign: 'center',
            headerShown: false,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#c0c0c0',
            drawerLabelStyle: {
                marginLeft: -25,
                fontWeight: 'bold',
                fontSize: 15,
            }
        }
    }
    > 

        <Drawer.Screen
        name="Home" 
        component={Stack}
        options={{
            title: 'Home',
            drawerIcon: ({color}) => (
                <Entypo name="home" size={22} color={color}/>
                ),  
        }}
        />
     

        <Drawer.Screen
        name="Pizza" 
        component={Stack}
        options={{ 
            drawerIcon: ({color}) => (
                <Ionicons name="pizza" size={22} color={color}/>
                ),  
        }}
        />

        <Drawer.Screen
        name="HotDog" 
        component={Stack}
        options={{ 
            title: 'Cachorro quente',
            drawerIcon: ({color}) => (
                <FontAwesome5 name="hotdog" size={22} color={color}/>
                ),  
        }}
        />


        <Drawer.Screen 
        name="Dessert" 
        component={Stack}
        options={{
            title: 'Sobremessa',
            drawerIcon: ({color}) => (
                <Entypo name="cake" size={22} color={color}/>
                ),  
        }}
        />       

        <Drawer.Screen 
        name="Salads" 
        component={Stack}
        options={{ 
            title: 'Saladas',
            drawerIcon: ({color}) => (
                <FontAwesome name="leaf" size={22} color={color}/>
                ),  
        }}
        />

        <Drawer.Screen 
        name="Cervejas" 
        component={Stack}
        options={{ 
            title: 'Saladas',
            drawerIcon: ({color}) => (
                <FontAwesome name="leaf" size={22} color={color}/>
                ),  
        }}
        />

    </Drawer.Navigator>

    )
}