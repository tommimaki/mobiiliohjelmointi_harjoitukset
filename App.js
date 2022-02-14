import React, { useState, useEffect } from 'react';
import * as SQLite from 'expo-sqlite';

import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';



export default function SqShopping() {

    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState('');
    const [list, setList] = useState([]);

    const db = SQLite.openDatabase('shoppingDB.db');

    //createtable
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists shoppinglist (id integer primary key not null, product text, amount int);');
        });
        updateList();
    }, []);

    // save products
    const saveProduct = () => {
        if(product.length < 1 || amount.length < 1){
            Alert.alert('input empty')
        } else{
        db.transaction(tx => {
            tx.executeSql('insert into shoppinglist (product, amount) values (?, ?);', [product, parseInt(amount)]);
        }, null, updateList
        )
        setProduct('')
        setAmount('')
    }
    }

    //updatelist
    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from shoppinglist;', [], (_, { rows }) =>
                setList(rows._array)
            );
        });
    }

    // delete

    const deleteProduct = (id) => {
        db.transaction(
            tx => {
                tx.executeSql('delete from shoppinglist where id = ?;', [id]);
            }, null, updateList
        )
    }


    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: "80%",
                    backgroundColor: "#fff",
                    marginLeft: "10%"
                }}
            />
        );
    };

    return (


        <View style={styles.container}>
            <TextInput placeholder='products' style={{ marginTop: '40%', fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(product) => setProduct(product)}
                value={product} />
            <TextInput placeholder='amount' keyboardType="numeric" style={{ marginTop: 5, marginBottom: 5, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(amount) => setAmount(amount)}
                value={amount} />
            <Button onPress={saveProduct} title="Save" />
            <Text style={{ marginTop: 30, fontSize: 20 }}>products</Text>
            <FlatList
                style={{ marginLeft: "5%" }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <View style={styles.listcontainer}><Text style={{ fontSize: 18 }}>{item.product}, {item.amount}</Text>
                    <Text style={styles.button}  onPress={() => deleteProduct(item.id)}> poista</Text></View>}
                data={list}
                ItemSeparatorComponent={listSeparator}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listcontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    button: {
        marginLeft: 5,
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
        color: 'red',

    }

});