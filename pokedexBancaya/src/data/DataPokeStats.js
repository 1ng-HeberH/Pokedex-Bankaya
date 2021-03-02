import React from 'react';
import {FlatList, View} from 'react-native';
import Title from '../components/Titles';
import Text from '../components/PokeText';
import ScreenText from '../data/DataScreensText';

export default PokeStats = (props) => {
  return (
    <View>
      <Title titleType="bottonTitle" text={ScreenText.modalTitleButtonStats} />
      <FlatList
        data={props.data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <>
            <Title titleType="" text={item.stat.name} />
            <Text text={item.base_stat} />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
