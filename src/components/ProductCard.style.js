import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  innerContainer: {
    backgroundColor: 'grey',
    padding: 5,
    margin: 5,
  },
  image: {
    height: Dimensions.get('window').height/3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  price: {
    fontSize: 15,
  },
  InStock:{
    color: 'red',
    fontSize: 20,
  }
});
