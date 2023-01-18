import { createDrawerNavigator } from '@react-navigation/drawer';

import Stack from './index'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return(

    <Drawer.Navigator
    screenOptions={
        {
            headerTitleAlign: 'center',
            headerShown: false   
        }
    }
    >
        <Drawer.Screen
        name="Pizza"
        component={Stack}
        options={{ title: 'Pizza' }}
        />

        <Drawer.Screen
        name="Fingerfoods" 
        component={Stack}
        options={{ title: 'Petiscos' }}
        />

        <Drawer.Screen 
        name="Dessert" 
        component={Stack}
        options={{ title: 'Sobremessa' }}
        />       

        <Drawer.Screen 
        name="Salads" 
        component={Stack}
        options={{ title: 'Saladas' }}
        />

    </Drawer.Navigator>

    )
}