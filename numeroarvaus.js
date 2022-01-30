import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image, Text } from 'react-native';

let numberOfGuesses;
let answer;
export default function App() {
 
  const [userInput, setUserInput ] = useState('');
  const [tip, setTip] = useState('');
 
 
  const startApp = () => {
    setTip('guess a number betw 0- 100 ')
    numberOfGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    console.log('answer is: ', answer)
  }

  useEffect(() => {
    startApp();
  }, [])

  const buttonPressed = () => { 
    const guess = Number(userInput)
    numberOfGuesses ++;
    console.log('arvaus', guess)
    if( guess < answer ) {
      setTip(` your guess ${guess} is too low ` ) ;
    } else if(guess > answer ){
      setTip(`your guess ${guess} is too high`)
    } else{
      Alert.alert(`you guessed the right answer in ${numberOfGuesses} guesses`)
      startApp();
    }


    setUserInput('');
    
  };




  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
      <Text>{tip}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text => setUserInput(text)} />
      <Button onPress={buttonPressed} title="arvaa" />
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