import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
// import HomeScreen from '../screens/Screen2;
import HomeScreen from '@/screens/Screen1';
import DetailsScreen from '@/screens/Screen2';
import DropdownScreen from '@/screens/Screen3';
import MainScreen from '@/screens/Screen4';
// import { RootStackParamList } from './src/types';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Dropdown: undefined;
    Main: undefined;
  };


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#000000',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'My Home' }}
        />
        {/* <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Details' }}
        />
        <Stack.Screen 
          name="Dropdown" 
          component={DropdownScreen} 
          options={{ title: 'Dropdown' }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ title: 'Main' }}
        /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}