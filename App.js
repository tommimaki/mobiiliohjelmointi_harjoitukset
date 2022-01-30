import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput, Image } from 'react-native';

export default function App() {
  const [ans, setAns] = useState('');
  const [num1, setnum1] = useState(null);
  const [num2, setnum2] = useState(null);

  const buttonPressedMinus = () => { 
    let vastaus = num1 - num2
    setAns(vastaus);
  };
  const buttonPressedPlus = () => { 
    let x = parseInt(num1);
    let y = parseInt(num2);
    setAns(x + y)
  };

  return (
    <View style={styles.container}>
      <Text>Answer: {ans} </Text>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num1 => setnum1(num1)} value={num1}/>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num2 => setnum2(num2)} value={num2}/>
      <View style={styles.operators}>
      <View style={styles.buttons}>
      <Button  onPress={buttonPressedMinus} title="-" />
      </View>
      <View style= {styles.buttons}>
      <Button  onPress={buttonPressedPlus} title="+" />
      </View>
      <StatusBar style="auto" />
    </View>
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
  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1,
    padding:5,
    margin: 5
  },
  operators: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttons : {
    width: '20%'
  }
});