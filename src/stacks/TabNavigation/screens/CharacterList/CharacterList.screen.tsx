import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import NavBar from '../../../components/Base/NavBar/NavBar';
import TitleText from "../../../components/Base/TitleText/TitleText";
import CharacterCard from "../../../components/CharacterList/CharacterCard";
import { useCharacters } from "../../../../hooks/useCharacters";
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const { data: characters } = useCharacters();
  
  return (
    <SafeAreaView style={styles.background}>
      <NavBar/>
      <FlatList
        data={characters}
        contentContainerStyle={styles.container}
        ListHeaderComponent={<TitleText title="Characters"/>}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard characterData={item}/>
        )}
      />
    </SafeAreaView>
  );
};

export default CharacterListScreen;
