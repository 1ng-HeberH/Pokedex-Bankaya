import React from 'react';
import { Pressable, StyleSheet} from 'react-native'; 
import Colors from '../style/Colors';
import Title from '../components/Titles';

export default ModalButton = ({text, onPress}) => {
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Title titleType="bottonTitle" text={text}></Title>
      </Pressable>
    );
  };

  const styles = StyleSheet.create({
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