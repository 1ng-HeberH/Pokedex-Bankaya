import React from 'react';
import {FlatList, View} from 'react-native';
import Title from '../components/Titles';
import Text from '../components/PokeText';
import ScreenText from '../data/DataScreensText';

export default PokeTypes = (props) => {
  return (
    <View>
      <Title titleType="bottonTitle" text={ScreenText.modalTitleButtonTypes} />
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Text text={item.type.name} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
