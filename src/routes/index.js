import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Cart from '../pages/cart/index';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Cart" component={Cart} 
                options={{
                    headerTitle: 'Carrinho',                   
                }}
            />
        </Stack.Navigator>
    )
}
