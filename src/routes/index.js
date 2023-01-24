import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import do tabBar
import Local from '../Pages/Local'
import Hamburger from '../Pages/Hamburger'
import Drinks from '../Pages/Drinks';
import Steaks from '../Pages/Steaks';
import Home from '../Pages/Home';

// imports das informações dos drinks
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

// imports das informações dos locais 
import InformationBalSC from '../Pages/Local/InformationBalSC'
import InformationFloSC from '../Pages/Local/InformationFloSC'
import InformationJonSC from '../Pages/Local/InformationJonSC'
import InformationPoaRS from '../Pages/Local/InformationPoaRS'

// import das informações dos file
import InformationBone from '../Pages/Steaks/InformationBone'
import InformationFilet from '../Pages/Steaks/InformationFilet'
import InformationPork from '../Pages/Steaks/InformationPork'
import InformationRibeye from '../Pages/Steaks/InformationRibeye'
import InformationSteaks from '../Pages/Steaks/InformationSteaks'
import InformationStrip from '../Pages/Steaks/InformationStrip'

// import das informações dos hamburguer
import InformationHam from '../Pages/Hamburger/InformationHam'
import InformationOzzy from '../Pages/Hamburger/InformationOzzy'
import InformationPepp from '../Pages/Hamburger/InformationPepp'
import InformationRibs from '../Pages/Hamburger/InformationRibs'
import InformationSmoke from '../Pages/Hamburger/InformationSmoke'
import InformationVegg from '../Pages/Hamburger/InformationVegg'

import InformationAboriginal from '../Pages/Fingerfoods/InformationAboriginal'
import InformationChapa from '../Pages/Fingerfoods/InformationChapa'
import InformationFish from '../Pages/Fingerfoods/InformationFish'
import InformationOnion from '../Pages/Fingerfoods/InformationOnion'
import InformationPorkBites from '../Pages/Fingerfoods/InformationPorkBites'
import InformationPotato from '../Pages/Fingerfoods/InformationPotato'
import InformationShark from '../Pages/Fingerfoods/InformationShark'
import InformationTasmanian from '../Pages/Fingerfoods/InformationTasmanian'
import InformationUluru from '../Pages/Fingerfoods/InformationUluru'
import InformationWings from '../Pages/Fingerfoods/InformationWings'


// import Pizza from '../Pages/Pizza'
// import HotDog from '../Pages/HotDog'
// import Dessert from '../Pages/Dessert'
// import Salads from '../Pages/Salads'
import Fingerfoods from '../Pages/Fingerfoods'


import { Entypo, FontAwesome5,  FontAwesome, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'

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
            title: 'Hamburger',
            tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="hamburger" size={size} color={color}/>
            )
        }}
        />

        <Tab.Screen 
        name="Fingerfoods" 
        component={Fingerfoods}
        options={{
            title: 'Petiscos',
            tabBarIcon: ({size, color}) => (
                <Ionicons name="fast-food" size={size} color={color}/>
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
            title: 'Drinks',
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
        }
    }
    initialRouteName="Login"
    >
        
        <Stack.Screen
        name="Local" 
        component={MyTab}
        />

        <Stack.Screen 
        name="InformationAboriginal" 
        component={InformationAboriginal}
        options={{ title: 'Aboriginal Chicken Fingers' }}
        />

        <Stack.Screen 
        name="InformationChapa" 
        component={InformationChapa}
        options={{ title: 'Acoc a Chapa de Carne' }}
        /> 

        <Stack.Screen 
        name="InformationFish" 
        component={InformationFish}
        options={{ title: 'Fish and Chips' }}
        />

        
        <Stack.Screen 
        name="InformationOnion" 
        component={InformationOnion}
        options={{ title: 'Didge Onion' }}
        />  

        
        <Stack.Screen 
        name="InformationPorkBites" 
        component={InformationPorkBites}
        options={{ title: 'Pork Bites' }}
        />  

        
        <Stack.Screen 
        name="InformationPotato" 
        component={InformationPotato}
        options={{ title: 'Didge Style Potato' }}
        />  

        
        <Stack.Screen 
        name="InformationShark" 
        component={InformationShark}
        options={{ title: 'Shark Bites' }}
        />  

        
        <Stack.Screen 
        name="InformationTasmanian" 
        component={InformationTasmanian}
        options={{ title: 'Tasmanian Chicken' }}
        />  
        
        <Stack.Screen 
        name="InformationUluru" 
        component={InformationUluru}
        options={{ title: 'Uluru Mignon' }}
        />  

        
        <Stack.Screen 
        name="InformationWings" 
        component={InformationWings}
        options={{ title: 'Chicken Wings' }}
        />    


        <Stack.Screen 
        name="InformationSteaks" 
        component={InformationSteaks}
        options={{ title: 'Gravy Mignon' }}
        />        

        <Stack.Screen 
        name="InformationHam" 
        component={InformationHam}
        options={{ title: 'Classic Burger' }}
        /> 

        <Stack.Screen 
        name="InformationOzzy" 
        component={InformationOzzy}
        options={{ title: 'Burger Ozzy' }}
        />

        <Stack.Screen 
        name="InformationPepp" 
        component={InformationPepp}
        options={{ title: 'Pepperoni Burger' }}
        />

        <Stack.Screen 
        name="InformationRibs" 
        component={InformationRibs}
        options={{ title: 'Ribs Steak Sandwich' }}
        />   

        <Stack.Screen 
        name="InformationSmoke" 
        component={InformationSmoke}
        options={{ title: 'Smoked Burger' }}
        /> 

        <Stack.Screen 
        name="InformationVegg" 
        component={InformationVegg}
        options={{ title: 'Veggie' }}
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