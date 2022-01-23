import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
 
  const [numero, setNumero ] = useState(null);
  const [arvaus, setArvaus] = useState(null);

  let arvaukset = 0;

  const buttonPressed = () => { 
    Alert.alert('numero on ' + numero);
    arvaukset = arvaukset + 1; 
    
    if(arvaus == numero){
      Alert.alert('Arvasit oikein, vastauksen saamiseen meni ' + arvaukset + ' arvausta'); 
    } else if(arvaus < numero){
      Alert.alert('numero  on suurempi kuin arvauksesi'); 
    } else{
      Alert.alert('numero  on pienempi kuin arvauksesi'); 
    }
    
  };


  const buttonPressednew = () => {
    arvaukset = 0;
    setNumero(Math.floor(Math.random() * 100) + 1);
  }


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={arvaus => setArvaus(arvaus)} value={arvaus}/>
      <Button onPress={buttonPressed} title="arvaa" />
      <Button onPress={buttonPressednew} title="uusi peli" />
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