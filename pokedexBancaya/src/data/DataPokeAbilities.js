import React from 'react';
import {FlatList, View} from 'react-native';
import Title from '../components/Titles';
import Text from '../components/PokeText';
import ScreenText from '../data/DataScreensText';

export default PokeHabilities = (props) => {
  return (
    <View>
      <Title
        titleType="bottonTitle"
        text={ScreenText.modalTitleButtonHabilities}
      />
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Text text={item.ability.name} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
