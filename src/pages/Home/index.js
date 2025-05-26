import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';
import { Feather} from '@expo/vector-icons';


export default function Home(){

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Coca-Cola',
            price: 19.90,   
        },
        {
            id: 2,
            name: 'Chocolate',
            price: 6.50,
        },
        {
            id: 3,
            name: 'Queijo 500g',
            price: 15,
        },
        {
            id: 4,
            name: 'Batata-Frita',
            price: 23.90,
        },
        {
            id: 5,
            name: 'Guaraná-Lata',
            price: 6.00,
        }
    ])
    
    return( 
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>Lista de produtos</Text>
                <TouchableOpacity style={styles.buttonAdd}>
                    <View style={styles.buttonAddContent}>
                        <Text style={styles.buttonAddText}>3</Text>
                    </View>
                    <Feather name='shopping-cart' size={30} color='#000'/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingEnd: 14,
        paddingStart: 14,
    },
    cardContent: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonAdd: {
        
    },
    buttonAddContent: {
        backgroundColor: '#ff0000',
        width: 20,
        height: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',    
        position: 'absolute',
        zIndex: 1,
        bottom: -2,
        left: -4,
    },
    buttonAddText: {
        color: '#fff',
        fontSize: 13,
    }
})
