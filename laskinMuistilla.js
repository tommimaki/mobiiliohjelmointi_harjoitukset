import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert } from 'react-native';

export default function App() {
    const [num1, setnum1] = useState(null);
    const [num2, setnum2] = useState(null);
    
  
  const [data, setData] = useState([]);

  const buttonPressedPlus = () => {
    
    
    let x = parseInt(num1);
    let y = parseInt(num2);
    let vastausPlus = x + y

    let laskuMuistiin = num1 + ' + ' + num2 + ' = ' + vastausPlus 
    

    Alert.alert('vastaus = ' + vastausPlus); 

    setData([...data, { key: laskuMuistiin }]);
  }

  const buttonPressedMinus = () => {
      let vastausMinus = num1 - num2;


    let laskuMuistiinMinus = num1 + ' - ' + num2 + ' = ' + vastausMinus 
    Alert.alert('vastaus = ' + vastausMinus); 

    setData([...data, { key: laskuMuistiinMinus }]);
    
  }

  return (
    <View style={styles.container}>
      
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num1 => setnum1(num1)} value={num1}/>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={num2 => setnum2(num2)} value={num2}/>
      <Button onPress={buttonPressedPlus} title="+" />
      <Button onPress={buttonPressedMinus} title="-" />
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});