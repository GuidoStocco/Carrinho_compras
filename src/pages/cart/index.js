import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../../contexts/CartContext';   
import CartItem from '../../components/CartItem';

export default function Cart(){
    const {cart, addCartItem, removeCartItem} = useContext(CartContext);
    return(
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyCart}>Nenhum item no carrinho</Text>
                )}
                renderItem={({item}) => (
                    <CartItem data={item} addAmount={() => addCartItem(item)} removeItem={() => removeCartItem(item)}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingEnd: 14,
        paddingStart: 14,
        paddingTop: 14
    },
    emptyCart: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 14
    }
})
