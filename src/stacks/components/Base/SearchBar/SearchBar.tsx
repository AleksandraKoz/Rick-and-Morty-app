import React from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { styles } from './SearchBar.styles';

interface ISearchBar {
  query: string;
  onChangeQuery: (text: string) => void;
};

const SearchBar = ({ query, onChangeQuery }: ISearchBar) => (
  <View style={styles.container}>
    <EvilIcons name="search" size={24} color="#162C1B"/>
    <TextInput
      style={styles.input}
      placeholder="Search the characters"
      placeholderTextColor="#59695C"
      value={query}
      onChangeText={onChangeQuery}
    />
    {query.length > 0 && (
      <TouchableHighlight
        style={styles.clearButton}
        underlayColor="#DAE4DC"
        onPress={() => onChangeQuery('')}
      >
        <EvilIcons name="close" size={24} color="#59695C"/>
      </TouchableHighlight>
    )}
  </View>
);

export default SearchBar;
