import React, { useState } from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { styles } from './SearchBar.styles';

const SearchBar = () => {
  const [ query, setQuery ] = useState('');
  
  return (
    <View style={styles.container}>
      <EvilIcons name="search" size={24} color="#162C1B"/>
      <TextInput
        style={styles.input}
        placeholder="Search the characters"
        placeholderTextColor="#59695C"
        value={query}
        onChangeText={setQuery}
      />
      {query.length > 0 && (
        <TouchableHighlight
          style={styles.clearButton}
          underlayColor="#DAE4DC"
          onPress={() => setQuery('')}
        >
          <EvilIcons name="close" size={24} color="#59695C"/>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default SearchBar;
