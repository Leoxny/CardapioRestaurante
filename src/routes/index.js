import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Local from '../Pages/Local'
import Hamburger from '../Pages/Hamburger'
import Drinks from '../Pages/Drinks';
import Steaks from '../Pages/Steaks';
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

import InformationBalSC from '../Pages/Local/InformationBalSC'
import InformationFloSC from '../Pages/Local/InformationFloSC'
import InformationJonSC from '../Pages/Local/InformationJonSC'
import InformationPoaRS from '../Pages/Local/InformationPoaRS'

import InformationBone from '../Pages/Steaks/InformationBone'
import InformationFilet from '../Pages/Steaks/InformationFilet'
import InformationPork from '../Pages/Steaks/InformationPork'
import InformationRibeye from '../Pages/Steaks/InformationRibeye'
import InformationSteaks from '../Pages/Steaks/InformationSteaks'
import InformationStrip from '../Pages/Steaks/InformationStrip'

import InformationDog from '../Pages/HotDog/InformationDog'
import InformationHam from '../Pages/Hamburger/InformationHam'

import { Entypo, FontAwesome5,  FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

function MyTab(){
    return(

    <Tab.Navigator
    screenOptions={
        {
            headerTitleAlign: 'center',
            headerShown: false,
            tabBarActiveTintColor: '#8200d6',
            tabBarInactiveTintColor: '#c0c0c0',
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
            title: 'Bife',
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
        name="Steaks" 
        component={Steaks}
        options={{
            title: 'Bife',
            tabBarIcon: ({size, color}) => (
                <MaterialCommunityIcons name="food-drumstick" size={size} color={color}/>
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

        <Stack.Screen
        name="Local" 
        component={MyTab}
        />

<Stack.Screen 
        name="InformationSteaks" 
        component={InformationSteaks}
        options={{ title: 'Gravy Mignon' }}
        />        

        <Stack.Screen 
        name="InformationHam" 
        component={InformationHam}
        options={{ title: 'Hamburguer' }}
        />        


        <Stack.Screen 
        name="InformationDrinksLimon" 
        component={InformationDrinksLimon}
        options={{ title: 'Caipirinha de limão' }}
        /> 

         <Stack.Screen 
        name="InformationDrinksMarg" 
        component={InformationDrinksMarg}
        options={{ title: 'Jasmine Margarita' }}
        /> 

         <Stack.Screen 
        name="InformationGilmet" 
        component={InformationGilmet}
        options={{ title: 'Gilmet Cocktail' }}
        /> 

<Stack.Screen 
        name="InformationGinTonica" 
        component={InformationGinTonica}
        options={{ title: 'Gin Tonica' }}
        /> 

 <Stack.Screen 
        name="InformationAperol" 
        component={InformationAperol}
        options={{ title: 'Aperol Spritz' }}
        /> 

 <Stack.Screen 
        name="InformationBeach" 
        component={InformationBeach}
        options={{ title: 'Sex on the beach' }}
        /> 

 <Stack.Screen 
        name="InformationTropical" 
        component={InformationTropical}
        options={{ title: 'Gin Tropical' }}
        /> 

 <Stack.Screen 
        name="InformationMojito" 
        component={InformationMojito}
        options={{ title: 'Mojito' }}
        /> 

 <Stack.Screen 
        name="InformationBoomerang" 
        component={InformationBoomerang}
        options={{ title: 'Boomerang' }}
        /> 

 <Stack.Screen 
        name="InformationAbacaxi" 
        component={InformationAbacaxi}
        options={{ title: 'Caipirinha de abacaxi' }}
        /> 

<Stack.Screen 
        name="InformationNevada" 
        component={InformationNevada}
        options={{ title: 'Caipirosca nevada' }}
        />

<Stack.Screen 
        name="InformationMorango" 
        component={InformationMorango}
        options={{ title: 'Caipirinha de morango condensada' }}
        />

 <Stack.Screen 
        name="InformationLimao" 
        component={InformationLimao}
        options={{ title: 'Caipirinha de limão condensada' }}
        /> 

 <Stack.Screen 
        name="InformationMelancia" 
        component={InformationMelancia}
        options={{ title: 'Twist de melancia e morango' }}
        />

<Stack.Screen 
        name="InformationBalSC" 
        component={InformationBalSC}
        options={{ title: 'Balneário Camboriú / SC' }}
        />

<Stack.Screen 
        name="InformationFloSC" 
        component={InformationFloSC}
        options={{ title: 'Florianópolis / SC' }}
        />

<Stack.Screen 
        name="InformationJonSC" 
        component={InformationJonSC}
        options={{ title: 'Joinville / SC' }}
        />

<Stack.Screen 
        name="InformationPoaRS" 
        component={InformationPoaRS}
        options={{ title: 'Porto Alegre / RS' }}
        />

<Stack.Screen 
        name="InformationBone" 
        component={InformationBone}
        options={{ title: 'T-Bone' }}
        />

<Stack.Screen 
        name="InformationFilet" 
        component={InformationFilet}
        options={{ title: 'Syoney Filet' }}
        />

<Stack.Screen 
        name="InformationPork" 
        component={InformationPork}
        options={{ title: 'Pork Ribs' }}
        />

<Stack.Screen 
        name="InformationStrip" 
        component={InformationStrip}
        options={{ title: 'Strip Steack' }}
        />

<Stack.Screen 
        name="InformationRibeye" 
        component={InformationRibeye}
        options={{ title: 'Queensland Ribeye' }}
        />

    </Stack.Navigator>

    )
}