import React, { useState } from 'react';
import { FlatList, SafeAreaView, } from 'react-native';

import MainScreenHeader from '../../../components/Base/MainScreenHeader/MainScreenHeader';
import CharacterCard from '../../../components/CharacterList/CharacterCard';
import NavBar from '../../../components/Base/NavBar/NavBar';
import { useFavouriteCharacters } from '../../../../hooks/useFavouriteCharacters';
import { styles } from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const { data: favouriteCharactersData = [] } =
    useFavouriteCharacters();
  
  const filtered = favouriteCharactersData.filter(singleCharacter =>
    singleCharacter.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  
  return (
    <SafeAreaView style={styles.background}>
      <NavBar/>
      <FlatList
        data={filtered}
        style={styles.listBackground}
        contentContainerStyle={styles.listPadding}
        ListHeaderComponent={<MainScreenHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CharacterCard characterData={item}/>}
      />
    </SafeAreaView>
  );
};

export default FavoriteCharactersScreen;
