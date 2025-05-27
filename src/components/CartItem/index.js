import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../../contexts/CartContext';

export default function CartItem({data, addAmount, removeItem}){
    const [amount, setAmount] = useState(data?.amount);

    function handleIncrease(){
        addAmount();
        setAmount(item => item + 1);
    }

    function handleDecrease(){
        removeItem();
        if(amount === 0){
            setAmount(0);
            return;
        }
        setAmount(item => item - 1);
    }
    return(
        <View style={styles.container}>
           <View>
            <Text style={styles.Title}>{data.name}</Text>
            <Text style={styles.price}>R${data.price}</Text>
           </View>

           <View style={styles.amountContainer}>
                <TouchableOpacity style={styles.buttonAmount} onPress={handleDecrease}>
                    <Text style={styles.buttonAmountText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.amount}>{amount}</Text>

                <TouchableOpacity style={styles.buttonAmount} onPress={handleIncrease}>
                    <Text>+</Text>
                </TouchableOpacity>
         
           </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14
    },
    buttonAmount: {
        backgroundColor: '#168fff',
        padding: 6,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 3
    },
    amount: {
        marginLeft: 14,
        marginRight: 14,
        fontSize: 18
    }  
})
