import React, { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';

import NavBar from '../../../components/Base/NavBar/NavBar';
import CharacterCard from '../../../components/CharacterList/CharacterCard';
import MainScreenHeader from "../../../components/Base/MainScreenHeader/MainScreenHeader";
import { useCharacters } from '../../../../hooks/useCharacters';
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters(searchTerm);
  
  const characters = data?.pages.flatMap((page) => page.results) ?? [];
  
  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  
  return (
    <SafeAreaView style={styles.background}>
      <NavBar/>
      <FlatList
        data={characters}
        style={styles.listBackground}
        contentContainerStyle={styles.listPadding}
        ListHeaderComponent={<MainScreenHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard characterData={item}/>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator style={{ marginVertical: 16 }}/> : null
        }
      />
    </SafeAreaView>
  );
};

export default CharacterListScreen;
