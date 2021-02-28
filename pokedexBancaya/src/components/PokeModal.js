import React, {useState, useEffect} from 'react';
import {Image, Pressable, Modal, StyleSheet, View, Text} from 'react-native';
import Colors from '../style/Colors';
import Title from '../components/Titles';
import ScreenText from '../data/ScreensText';
import PokeCard from '../components/PokeCard';

const ModalButton = ({text, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Title titleType="bottonTitle" text={text}></Title>
    </Pressable>
  );
};

export default function PokeModal() {
  const [isPokeModalActive, setPokeModalActive] = useState(false);
  const [isPokeDataVisible, setPokeDataVisible] = useState('ScreenDataPokeImage');

  const ScreenDataPokeImage = () => {
    return <Text>Image</Text>;
  };
  const ScreenDataPokeData = () => {
    return <Text>Data</Text>;
  };
  const ScreenDataPokeEvolutions = () => {
    return <Text>Evolutions</Text>;
  };
  const ScreenDataPokeHabilities = () => {
    return <Text>Habilities</Text>;
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPokeModalActive}
        onRequestClose={() => {
          setPokeModalActive(!isPokeModalActive);
        }}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Title
              customStyle={styles.titleCard}
              titleType="cardTitle"
              text="PokeName"
            />
            <Pressable
              style={styles.closButtonContainer}
              onPress={() => setPokeModalActive(!isPokeModalActive)}>
              <Image source={require('../images/closeIcon.png')} />
            </Pressable>
          </View>
          <View style={styles.dataView}>
            {isPokeDataVisible === 'ScreenDataPokeImage' &&
              ScreenDataPokeImage()}
            {isPokeDataVisible === 'ScreenDataPokeData' && ScreenDataPokeData()}
            {isPokeDataVisible === 'ScreenDataPokeEvolutions' &&
              ScreenDataPokeEvolutions()}
            {isPokeDataVisible === 'ScreenDataPokeHabilities' &&
              ScreenDataPokeHabilities()}
          </View>
          <View style={styles.buttonContainer}>
            <ModalButton
              onPress={() => setPokeDataVisible('ScreenDataPokeImage')}
              text={ScreenText.modalTitleButtonImage}
            />
            <ModalButton
              onPress={() => setPokeDataVisible('ScreenDataPokeEvolutions')}
              text={ScreenText.modalTitleButtonEvolution}
            />
            <ModalButton
              onPress={() => setPokeDataVisible('ScreenDataPokeData')}
              text={ScreenText.modalTitleButtonData}
            />
            <ModalButton
              onPress={() => setPokeDataVisible('ScreenDataPokeHabilities')}
              text={ScreenText.modalTitleButtonHabilities}
            />
          </View>
        </View>
      </Modal>
      <PokeCard onPress={()=> setPokeModalActive(true)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.NavyBlue,
    borderRadius: 13,
    height: '95%',
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 10,
    width: '95%',
  },
  headerSection: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  closButtonContainer: {
    end: 0,
    height: 40,
    position: 'absolute',
    width: 40,
  },
  titleCard: {
    color: Colors.LightGray,
  },
  dataView: {
    alignSelf: 'center',
    backgroundColor: Colors.LightGray,
    borderRadius: 10,
    height: 350,
    padding: 25,
    marginVertical: 10,
    width: '95%',
  },
  buttonContainer: {
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 300,
    padding: 10,
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: Colors.Orange,
    borderRadius: 5,
    height: 100,
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
    width: 140,
  },
});
