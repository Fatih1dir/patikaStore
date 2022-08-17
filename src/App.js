import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';

import ProductCard from './components/ProductCard';
import productLists from './data.json';

function App() {
  const renderProducts = ({item}) => <ProductCard products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>PATIKA STORE</Text>
        <TextInput
          style={styles.input}
          placeholder="Ara..."
        />
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={productLists}
        renderItem={renderProducts}
        numColumns={2}
        key={item => item.id}
        horizontal={false}></FlatList>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
    padding: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#BAB8BB',
  },
  headerContainer: {
    borderRadius: 10,
  }
};
export default App;
