import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import CartProvider from './src/contexts/CartContext';

export default function App(){
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <CartProvider>
          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
          <Routes />
        </CartProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}