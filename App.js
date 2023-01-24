import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import DrawerNavigation from './src/routes/Drawer/drawer'


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation>
        <Routes/>
      </DrawerNavigation>
   </NavigationContainer>
  );
}
