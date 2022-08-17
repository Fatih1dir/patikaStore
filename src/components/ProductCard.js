import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';


const ProductCard = ({products}) => {
  return (
    
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        {products.inStock == true ? (<></>) : (<Text style={styles.InStock}>Stokta Yok</Text>)}
      </View>
    </View>
  );
};
export default ProductCard;
