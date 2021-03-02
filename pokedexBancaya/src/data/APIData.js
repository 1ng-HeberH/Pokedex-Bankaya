import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PokeModal from '../components/PokeModal';

export default class APIData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/',
      urlab: 'https://pokeapi.co/api/v2/ability/',
      urlcar: 'https://pokeapi.co/api/v2/characteristic/',
      urlnat: 'https://pokeapi.co/api/v2/nature/',
      urlstats: 'https://pokeapi.co/api/v2/stat/',
    };
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = () => {
    fetch(this.state.url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          pokemon: res.results,
          url: res.next,
        });
      });
  };

  render() {
    return (
      <FlatList
        data={this.state.pokemon}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PokeModal pokeName={item.name} pokeLink={item.url} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
