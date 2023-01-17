import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dessert from '../Pages/Dessert'
import Salads from '../Pages/Salads'
import Local from '../Pages/Local'
import HotDog from '../Pages/HotDog'
import Fingerfoods from '../Pages/Fingerfoods'
import Drinks from '../Pages/Drinks';
import Hamburger from '../Pages/Hamburger';
import Pizza from '../Pages/Pizza';
import Home from '../Pages/Home';

import {Ionicons, Entypo, FontAwesome5, MaterialIcons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function MyTab(){
//     return(

//     <Drawer.Navigator>
//         <Drawer.Screen name="Sobremessa" component={Dessert}/>
//         <Drawer.Screen name="Saladas" component={Salads} />
//         <Drawer.Screen name="Local" component={Local} />
//         <Drawer.Screen name="Petisco" component={Fingerfoods} />
//     </Drawer.Navigator>
//     )
// }

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(

    <Tab.Navigator
        tabBarOptions={{
            tabStyle:{
                paddingBottom: 4,
                paddingTop: 4
            }
        }}
    >
        <Tab.Screen 
        name="Local" 
        component={Local}
        options={{
            tabBarIcon: ({size, color}) => (
                <MaterialIcons name="local-dining" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Hamburger" 
        component={Hamburger}
        options={{
            tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="hamburger" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="home" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Cachoro Quente" 
        component={HotDog}
        options={{
            tabBarIcon: ({size, color}) => (
                <Ionicons name="pizza" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Drinks" 
        component={Drinks}
        options={{
            tabBarIcon: ({size, color}) => (
                <Entypo name="drink" size={size} color={color}/>
            )
        }}
        />

    </Tab.Navigator>

    )
}