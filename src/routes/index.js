import React from 'react';
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

import InformationDrinks from '../Pages/Drinks/InformationDrinks';
import InformationDog from '../Pages/HotDog/InformationDog'
import InformationHam from '../Pages/Hamburger/InformationHam'

import { Entypo, FontAwesome5,  FontAwesome} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

function MyTab(){
    return(

    <Tab.Navigator
    screenOptions={
        {
            headerShown: false
        }
    }
    >
        <Tab.Screen 
        name="Local" 
        component={Local}
        options={{
            title: 'Local',
            tabBarIcon: ({size, color}) => (
                <FontAwesome name="map-marker" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Hamburger" 
        component={Hamburger}
        options={{
            title: 'Hamburger',
            tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="hamburger" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            title: 'Home',
            tabBarIcon: ({size, color}) => (
                <Entypo name="home" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Cachoro Quente" 
        component={HotDog}
        options={{
            title: 'Cachorro quente',
            tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="hotdog" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Drinks" 
        component={Drinks}
        options={{
            title: 'Bebidas',
            tabBarIcon: ({size, color}) => (
                <Entypo name="drink" size={size} color={color}/>
            )
        }}
        />

    </Tab.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(

    <Stack.Navigator
    >
        <Stack.Screen
        name="Local"
        component={MyTab}
        options={{ title: 'Local' }}
        />

        <Stack.Screen
        name="Hamburger" 
        component={MyTab}
        options={{ title: 'Hamburger' }}
        />

        <Stack.Screen 
        name="InformationDog" 
        component={InformationDog}
        options={{ title: 'Cachorro quente' }}
        />       

        <Stack.Screen 
        name="Home" 
        component={MyTab}
        options={{ title: 'Home' }}
        />

        <Stack.Screen
        name="Cachoro Quente" 
        component={MyTab}
        options={{ title: 'Cachorro quente' }}
        />

        <Stack.Screen 
        name="InformationHam" 
        component={InformationHam}
        options={{ title: 'Cachorro quente' }}
        />        

        <Stack.Screen 
        name="Drinks" 
        component={MyTab}
        options={{ title: 'Bebidas' }}
        />

        <Stack.Screen 
        name="InformationDrinks" 
        component={InformationDrinks}
        options={{ title: 'Bebidas' }}
        />

    </Stack.Navigator>

    )
}