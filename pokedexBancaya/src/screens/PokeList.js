import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Title from '../components/Titles';
import ScreenText from '../data/ScreensText';
import Colors from '../style/Colors'
import PokeModal from '../components/PokeModal';

export default PokeList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Title titleType='screenTitle' text={ScreenText.screenTitlePoke} />
            <PokeModal />
        </SafeAreaView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White,
        height: '100%',
        paddingTop: 20,        
        paddingHorizontal: 15,
        width: '100%' 
    }
});