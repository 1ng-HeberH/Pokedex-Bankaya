import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import Colors from '../style/Colors';
import Title from '../components/Titles';

export default function pokeCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <Pressable style={styles.titleContainer} onPress={props.onPress}>
                <Title titleType='cardTitle' text='PokeName'/>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderColor: Colors.NavyBlue,
        borderRadius: 10,
        borderWidth: 5,
        flexDirection: 'row',
        height: 130,
        marginVertical: 20,
        padding: 5,
        width: '100%',
    },
    imageContainer: {
        backgroundColor: Colors.NavyBlue,
        borderRadius: 5,
        width: '45%',
    },
    titleContainer: {
        backgroundColor: Colors.Orange,
        alignItems: 'center',
        justifyContent: 'center',
        width: '55%',
        
    }
});