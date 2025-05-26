import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({data}){
    return(
        <View style={styles.container}>
            <View style={styles.productContent}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>R${data.price}</Text>
            </View>  
            <TouchableOpacity style={styles.buttonAdd}>
                <Text style={styles.buttonAddText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderRadius: 2,
        paddingBottom: 14,
        paddingTop: 14,
        padding: 8,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
   name:{
    fontSize: 16,
   },
   price:{
    fontSize: 16,
   },
   buttonAdd:{
    backgroundColor: '#168fff',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 3,
   },
   buttonAddText:{
    color: '#fff',
   }

})