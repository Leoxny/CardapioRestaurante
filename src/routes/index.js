import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Local from '../Pages/Local'
import HotDog from '../Pages/HotDog'
import Drinks from '../Pages/Drinks';
import Hamburger from '../Pages/Hamburger';
import Home from '../Pages/Home';

import InformationDrinksLimon from '../Pages/Drinks/InformationDrinksLimon';
import InformationDrinksMarg from '../Pages/Drinks/InformationDrinksMarg';
import InformationGilmet from '../Pages/Drinks/InformationGilmet';
import InformationGinTonica from '../Pages/Drinks/InformationGinTonica';
import InformationAperol from '../Pages/Drinks/InformationAperol';
import InformationBeach from '../Pages/Drinks/InformationBeach';
import InformationTropical from '../Pages/Drinks/InformationTropical';
import InformationMojito from '../Pages/Drinks/InformationMojito';
import InformationBoomerang from '../Pages/Drinks/InformationBoome';
import InformationAbacaxi from '../Pages/Drinks/InformationAbaca';
import InformationNevada from '../Pages/Drinks/InformationNevada';
import InformationMorango from '../Pages/Drinks/InformationMorango';
import InformationLimao from '../Pages/Drinks/InformationLimao';
import InformationMelancia from '../Pages/Drinks/InformationMelancia';

import InformationDog from '../Pages/HotDog/InformationDog'
import InformationHam from '../Pages/Hamburger/InformationHam'

import { Entypo, FontAwesome5,  FontAwesome} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

function MyTab(){
    return(

    <Tab.Navigator
    screenOptions={
        {
            headerShown: false,
            tabBarOptions: {
                activeTintColor: '#00ffff',

            },
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
    screenOptions={
        {
            headerTitleAlign: 'center',
            //headerShown: false            
        }
    }
    >
        {/* <Stack.Screen
        name="Local"
        component={MyTab}
        options={{ title: 'Local' }}
        /> */}

        <Stack.Screen
        name="Hamburger" 
        component={MyTab}
        options={{ title: 'Hamburger' }}
        />

        <Stack.Screen 
        name="InformationHam" 
        component={InformationHam}
        options={{ title: 'Hamburger' }}
        />       

        {/* <Stack.Screen 
        name="Home" 
        component={MyTab}
        options={{ title: 'Home' }}
        /> */}

        <Stack.Screen
        name="HotDog" 
        component={MyTab}
        options={{ title: 'Cachorro quente' }}
        />

        <Stack.Screen 
        name="InformationDog" 
        component={InformationDog}
        options={{ title: 'Cachorro quente' }}
        />        

        <Stack.Screen 
        name="Drinks" 
        component={MyTab}
        options={{ title: 'Bebidas' }}
        />

        <Stack.Screen 
        name="InformationDrinksLimon" 
        component={InformationDrinksLimon}
        options={{ title: 'Bebidas' }}
        />

        <Stack.Screen 
        name="InformationDrinksMarg" 
        component={InformationDrinksMarg}
        options={{ title: 'Bebidas' }}
        />

        <Stack.Screen 
        name="InformationGilmet" 
        component={InformationGilmet}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationGinTonica" 
        component={InformationGinTonica}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationAperol" 
        component={InformationAperol}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationBeach" 
        component={InformationBeach}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationTropical" 
        component={InformationTropical}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationMojito" 
        component={InformationMojito}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationBoomerang" 
        component={InformationBoomerang}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationAbacaxi" 
        component={InformationAbacaxi}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationNevada" 
        component={InformationNevada}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationMorango" 
        component={InformationMorango}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationLimao" 
        component={InformationLimao}
        options={{ title: 'Bebidas' }}
        />

<Stack.Screen 
        name="InformationMelancia" 
        component={InformationMelancia}
        options={{ title: 'Bebidas' }}
        />

    </Stack.Navigator>

    )
}