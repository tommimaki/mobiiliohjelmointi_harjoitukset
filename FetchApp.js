import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Text,TextInput, View, StyleSheet, Alert } from 'react-native';

export default App = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([]);


  const getFood = () => {
  fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(response => response.json())
    .then(responseJson => setData(responseJson.meals))
         console.log(data)
    .catch (error => {
        Alert.alert('error', error)
    }) 
  }





  return (
      
    <View style={{ flex: 1, padding: 24 }}>
         <TextInput style={styles.input}  onChangeText={input => setInput(input)} value={input} />
         <Button title="search" onPress={getFood}/>
     
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          
          )}
        />
    </View>
  )};

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