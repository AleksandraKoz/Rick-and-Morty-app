import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';

import NavBar from '../../../components/Base/NavBar/NavBar';
import TitleText from "../../../components/Base/TitleText/TitleText";
import CharacterCard from "../../../components/CharacterList/CharacterCard";
import { useCharacters } from "../../../../hooks/useCharacters";
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCharacters();
  
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
        contentContainerStyle={styles.container}
        ListHeaderComponent={<TitleText title="Characters"/>}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard key={item.created} characterData={item}/>
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
