import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default DataPokeImage = (props) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.imageView} source={{uri: props.value}} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    height: '100%',
    width: '100%',
  },
});
