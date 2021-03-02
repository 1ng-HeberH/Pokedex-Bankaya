import React from 'react';
import {Image, StyleSheet, View, Pressable} from 'react-native';
import Colors from '../style/Colors';
import Title from '../components/Titles';

export default function pokeCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.cardImage}} style={styles.imageView} />
      </View>
      <Pressable style={styles.titleContainer} onPress={props.onPress}>
        <Title titleType="cardTitle" text={props.pokeName} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderColor: Colors.NavyBlue,
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'row',
    height: 130,
    marginVertical: 20,
    padding: 5,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: Colors.NavyBlue,
    borderColor: Colors.NavyBlue,
    borderRadius: 5,
    justifyContent: 'center',
    width: '45%',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '55%',
  },
  imageView: {
    height: 115,
    width: 115,
  },
});
