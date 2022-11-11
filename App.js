import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store'
import { Provider } from 'react-redux'
import HomeScreen from './Screens/HomeScreen';
import ResturantScreen from './Screens/ResturantScreen';
import BasketScreen from './Screens/BasketScreen';
import PreparingOrderScreen from './Screens/PreparingOrderScreen';
import DeliveryScreen from './Screens/DeliveryScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home' 
            component={HomeScreen}
          />
          <Stack.Screen 
            name='Resturant' 
            component={ResturantScreen}
          />
          <Stack.Screen 
            name='Basket' 
            component={BasketScreen}
            options={{presentation:'modal' , headerShown: false}}
          />
          <Stack.Screen 
            name='PreparingOrderScreen' 
            component={PreparingOrderScreen}
            options={{presentation:'fullScreenModal' , headerShown: false}}
          />
          <Stack.Screen 
            name='Delivery' 
            component={DeliveryScreen}
            options={{presentation:'fullScreenModal' , headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
      
    </NavigationContainer>
    
  );
}
