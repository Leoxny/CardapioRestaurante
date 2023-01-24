import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomDrawer from '../../components/CustomDrawer';
import Stack from '../index'

import { Entypo, Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons'
import Home from '../../Pages/Home';
import Pizza from '../../Pages/Pizza';
import HotDog from '../../Pages/HotDog';
import Dessert from '../../Pages/Dessert';
import Salads from '../../Pages/Salads';
import Beers from '../../Pages/Beers';

import Local from '../../Pages/Local'

const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function MyTab(){
//     return(

//     <Tab.Navigator
//     screenOptions={
//         {
//             headerTitleAlign: 'center',
//             headerShown: false,
//             tabBarActiveTintColor: '#e32636',
//             tabBarInactiveTintColor: '#c0c0c0',
//         }
//     }
//     >
//         <Tab.Screen 
//         name="Local" 
//         component={Local}
//         options={{
//             title: 'Local',
//             tabBarIcon: ({size, color}) => (
//                 <FontAwesome name="map-marker" size={size} color={color}/>
//             )
//         }}
//         />

//         <Tab.Screen 
//         name="Hamburger" 
//         component={Hamburger}
//         options={{
//             title: 'Hamburger',
//             tabBarIcon: ({size, color}) => (
//                 <FontAwesome5 name="hamburger" size={size} color={color}/>
//             )
//         }}
//         />

//         <Tab.Screen 
//         name="Fingerfoods" 
//         component={Fingerfoods}
//         options={{
//             title: 'Petiscos',
//             tabBarIcon: ({size, color}) => (
//                 <Ionicons name="fast-food" size={size} color={color}/>
//             )
//         }}
//         />

//         <Tab.Screen 
//         name="Steaks" 
//         component={Steaks}
//         options={{
//             title: 'Bife',
//             tabBarIcon: ({size, color}) => (
//                 <MaterialCommunityIcons name="food-drumstick" size={size} color={color}/>
//             )
//         }}
//         />

//         <Tab.Screen 
//         name="Drinks" 
//         component={Drinks}
//         options={{
//             title: 'Drinks',
//             tabBarIcon: ({size, color}) => (
//                 <Entypo name="drink" size={size} color={color}/>
//             )
//         }}
//         />

//         <Tab.Screen 
//         name="Login" 
//         component={Login}
//         options={{
//             title: 'Login',
//             tabBarIcon: ({size, color}) => (
//                 <Entypo name="drink" size={size} color={color}/>
//             )
//         }}
//         />

//     </Tab.Navigator>
//     )
// }

function MyStack(){
    <Stack.Navigator 
    screenOptions={
        {
            headerTitleAlign: 'center',        
        }
    }
    >
        
        <Stack.Screen
        name="Pizza" 
        component={Pizza}
        />


    </Stack.Navigator>

}


export default function DrawerNavigation(){
    return(

    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={
        {
            headerTitleAlign: 'center',
            headerShown: false,
            drawerActiveBackgroundColor: '#e32636',
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
        name="HotDog" 
        component={HotDog}
        options={{ 
            title: 'Cachorro quente',
            drawerIcon: ({color}) => (
                <FontAwesome5 name="hotdog" size={22} color={color}/>
                ),  
        }}
        />


        <Drawer.Screen 
        name="Dessert" 
        component={Dessert}
        options={{
            title: 'Sobremessa',
            drawerIcon: ({color}) => (
                <Entypo name="cake" size={22} color={color}/>
                ),  
        }}
        />       

        <Drawer.Screen 
        name="Salads" 
        component={Salads}
        options={{ 
            title: 'Saladas',
            drawerIcon: ({color}) => (
                <FontAwesome name="leaf" size={22} color={color}/>
                ),  
        }}
        />

        <Drawer.Screen 
        name="Cervejas" 
        component={Beers}
        options={{ 
            title: 'Bebidas',
            drawerIcon: ({color}) => (
                <FontAwesome5 name="beer" size={22} color={color}/>
                ),  
        }}
        />

    </Drawer.Navigator>

    )
}