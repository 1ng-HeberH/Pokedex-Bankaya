import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../style/Colors';

export default class Titles extends Component {
  constructor(props) {
    super(props);
  }

  styleTitle() {
    let styleProperties = [];
    switch (this.props.titleType) {
      case 'screenTitle':
        styleProperties = [styles.screenTitleStyle, this.props.customStyle];
        break;
      case 'cardTitle':
        styleProperties = [styles.cardTitleStyle, this.props.customStyle];
        break;
      case 'bottonTitle':
        styleProperties = [styles.bottonTitleStyle, this.props.customStyle];
        break;
      default:
        styleProperties = [styles.statTitleStyle, this.props.customStyle];
        break;
    }
    return styleProperties;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={this.styleTitle()}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitleStyle: {
    color: Colors.Black,
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  cardTitleStyle: {
    color: Colors.Black,
    fontSize: 30,
  },
  bottonTitleStyle: {
    color: Colors.Black,
    fontSize: 24,
    fontWeight: 'bold',
  },
  statTitleStyle: {
    alignSelf: 'flex-start',
    color: Colors.NavyBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
