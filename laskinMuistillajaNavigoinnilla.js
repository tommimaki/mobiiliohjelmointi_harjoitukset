import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function Calculator({ navigation }) {
    const [num1, setnum1] = useState(null);
    const [num2, setnum2] = useState(null);
    const [data, setData] = useState([]);
    const [info, setInfo] = useState('')



    const PlusCalc = () => {


        let x = Number(num1) + Number(num2);
        let laskuMuistiinPlus = num1 + ' - ' + num2 + ' = ' + x

        setInfo(laskuMuistiinPlus);
        setData([...data, { key: laskuMuistiinPlus }])

    }

    const MinusCalc = () => {



        let vastausMinus = num1 - num2;


        let laskuMuistiinMinus = num1 + ' - ' + num2 + ' = ' + vastausMinus
        setInfo(laskuMuistiinMinus);

        setData([...data, { key: laskuMuistiinMinus }]);
    }


    return (


        <View style={styles.container}>
            <Text>{info}</Text>
            <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num1 => setnum1((num1))} value={num1} />
            <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num2 => setnum2((num2))} value={num2} />

            <View style={styles.operators}>
                <View style={styles.buttons}>
                    <Button title="+"
                        onPress={PlusCalc} />
                </View>
                <View style={styles.buttons}>
                    <Button title="-"
                        onPress={MinusCalc} />
                </View>
            </View>

            <Button
                title="Show Memory"
                onPress={() => navigation.navigate('Memory', { data })}
            />
        


        </View>
    );


}


function Memory({ route, navigation }) {
    const { data } = route.params;
    console.log(data)
    return (
        <View style={styles.container}>

            <Text>memory comes here</Text>
            <FlatList style={styles.list}
                data={data}
                renderItem={({ item }) =>
                    <Text>{item.key}</Text>
                }
            />

        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="Memory" component={Memory} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        borderColor: 'gray',
        borderWidth: 1
    },
    operators: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttons: {
        margin: 5,
        width: '20%'
    }

});