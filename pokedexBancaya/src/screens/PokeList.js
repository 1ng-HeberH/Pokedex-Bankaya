import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Title from '../components/Titles';
import ScreenText from '../data/DataScreensText';
import Colors from '../style/Colors';
import APIData from '../data/APIData';

export default PokeList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title titleType="screenTitle" text={ScreenText.screenTitlePoke} />
      <APIData />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 15,
    width: '100%',
  },
});
