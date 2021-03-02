import React, {useState, useEffect} from 'react';
import {Image, Pressable, Modal, StyleSheet, View} from 'react-native';
import Colors from '../style/Colors';
import Title from '../components/Titles';
import PokeCard from '../components/PokeCard';
import ModalButton from '../components/ModalButton';
import ScreenText from '../data/DataScreensText';
import PokeImage from '../data/DataPokeImage';
import PokeTypes from '../data/DataPokeTypes';
import PokeStats from '../data/DataPokeStats';
import PokeAbilities from '../data/DataPokeAbilities';

export default function PokeModal(props) {
  const [isPokeModalActive, setPokeModalActive] = useState(false);
  const [isPokeDataVisible, setPokeDataVisible] = useState('PokeImage');
  const [data, setData] = useState([]);
  const [dataSprites, setDataSprites] = useState([]);
  const [dataTypes, setDataTypes] = useState([]);
  const [dataStats, setDataStats] = useState([]);
  var image = dataSprites.front_default;

  useEffect(() => {
    fetch(props.pokeLink)
      .then((response) => response.json())
      .then((json) => {
        setDataSprites(json.sprites),
          setDataStats(json.stats),
          setData(json.abilities),
          setDataTypes(json.types);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={false}
        visible={isPokeModalActive}
        onRequestClose={() => {
          setPokeModalActive(!isPokeModalActive);
        }}>
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Title
              customStyle={styles.titleCard}
              titleType="cardTitle"
              text={props.pokeName}
            />
            <Pressable
              style={styles.closeButtonContainer}
              onPress={() => setPokeModalActive(!isPokeModalActive)}>
              <Image source={require('../images/closeIcon.png')} />
            </Pressable>
          </View>
          <View style={styles.dataScreen}>
            {isPokeDataVisible === 'PokeImage' && <PokeImage value={image} />}
            {isPokeDataVisible === 'PokeTypes' && (
              <PokeTypes data={dataTypes} />
            )}
            {isPokeDataVisible === 'PokeStats' && (
              <PokeStats data={dataStats} />
            )}
            {isPokeDataVisible === 'PokeAbilities' && (
              <PokeAbilities data={data} />
            )}
          </View>
          <View style={styles.buttonsContainer}>
            <ModalButton
              onPress={() => setPokeDataVisible('PokeImage')}
              text={ScreenText.modalTitleButtonImage}
            />
            <ModalButton
              onPress={() => setPokeDataVisible('PokeStats')}
              text={ScreenText.modalTitleButtonStats}
            />
            <ModalButton
              onPress={() => setPokeDataVisible('PokeTypes')}
              text={ScreenText.modalTitleButtonTypes}
            />
            <ModalButton
              onPress={() => setPokeDataVisible('PokeAbilities')}
              text={ScreenText.modalTitleButtonHabilities}
            />
          </View>
        </View>
      </Modal>
      <PokeCard
        cardImage={image}
        onPress={() => setPokeModalActive(true)}
        pokeName={props.pokeName}
      />
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
    width: '90%',
  },
  headerSection: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  closeButtonContainer: {
    end: 0,
    height: 40,
    position: 'absolute',
    width: 40,
  },
  titleCard: {
    color: Colors.LightGray,
  },
  dataScreen: {
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 10,
    height: 350,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: '95%',
  },
  buttonsContainer: {
    alignSelf: 'center',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 300,
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    position: 'absolute',
  },
});
