import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Fingerfoods from '../Pages/Home'
import Drinks from '../Pages/Drinks';
import Hamburger from '../Pages/Hamburger';
import Pizza from '../Pages/Pizza';
import Home from '../Pages/Home';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function Routes(){
    return(

        // <Drawer.Navigator>
        //     <Drawer.Screen name="Home" component={Home}/>
        // </Drawer.Navigator>

            <Tab.Navigator>
                <Tab.Screen name="File" component={Fingerfoods}/>
                <Tab.Screen name="Hamburger" component={Hamburger}/>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Pizza" component={Pizza}/>
                <Tab.Screen name="Drinks" component={Drinks}/>
            </Tab.Navigator>

    )
}