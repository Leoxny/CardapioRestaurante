import { createDrawerNavigator } from '@react-navigation/drawer';

import Dessert from '../Pages/Dessert'
import Salads from '../Pages/Salads'
import Local from '../Pages/Local'
import HotDog from '../Pages/HotDog'
import Fingerfoods from '../Pages/Fingerfoods'
import Drinks from '../Pages/Drinks';
import Hamburger from '../Pages/Hamburger';
import Pizza from '../Pages/Pizza';
import Home from '../Pages/Home';

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(

    <Drawer.Navigator
    >
        <Drawer.Screen
        name="Local"
        component={MyTab}
        options={{ title: 'Local' }}
        />

        <Drawer.Screen
        name="Hamburger" 
        component={MyTab}
        options={{ title: 'Hamburger' }}
        />

        <Drawer.Screen 
        name="InformationDog" 
        component={InformationDog}
        options={{ title: 'Cachorro quente' }}
        />       

        <Drawer.Screen 
        name="Home" 
        component={MyTab}
        options={{ title: 'Home' }}
        />

        <Drawer.Screen
        name="Cachoro Quente" 
        component={MyTab}
        options={{ title: 'Cachorro quente' }}
        />

        <Drawer.Screen 
        name="InformationHam" 
        component={InformationHam}
        options={{ title: 'Cachorro quente' }}
        />        

        <Drawer.Screen 
        name="Drinks" 
        component={MyTab}
        options={{ title: 'Bebidas' }}
        />

        <Drawer.Screen 
        name="InformationDrinks" 
        component={InformationDrinks}
        options={{ title: 'Bebidas' }}
        />

    </Drawer.Navigator>

    )
}