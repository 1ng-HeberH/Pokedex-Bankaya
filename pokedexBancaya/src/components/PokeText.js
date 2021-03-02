import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../style/Colors';

export default PokeText = (props) => {
  return <Text style={styles.textStyle}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.Orange,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
