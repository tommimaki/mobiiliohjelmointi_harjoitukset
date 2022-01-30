import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
    setIsFetching(false);
  }

  const onRefresh = () => {
    setIsFetching(true);
    buttonPressed();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <Button onPress={buttonPressed} title="Add" />
      <Button onPress={onRefresh} title="Clear" />
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        onRefresh={onRefresh}

        refreshing={isFetching}
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