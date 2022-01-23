import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const [num1, setnum1] = useState(null);
  const [num2, setnum2] = useState(null);

  const buttonPressedMinus = () => { 
    let vastaus = num1 - num2
    Alert.alert('vastaus = ' + vastaus); 
  };
  const buttonPressedPlus = () => { 
    let x = parseInt(num1);
    let y = parseInt(num2);
    let vastausPlus = x + y
    Alert.alert('vastaus  = ' + vastausPlus); 
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num1 => setnum1(num1)} value={num1}/>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num2 => setnum2(num2)} value={num2}/>
      <Button onPress={buttonPressedMinus} title="minus" />
      <Button onPress={buttonPressedPlus} title="plus" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image : {
    width: 250,
    height: 100
  },
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  }
});