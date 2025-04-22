import React from 'react';
import { Text, View } from 'react-native';

import { Character } from '../../../api/characters';
import { styles } from './CharacterListComponents.styled';

type TCharacterCardData = {
  characterData: Character;
};

const CharacterCardData = ({ characterData }: TCharacterCardData) => {
  const characterKeys: (keyof Character)[] = [ 'name', 'status', 'species' ];
  
  return (
    <View style={styles.infoContainer}>
      {characterKeys.map((item) => (
        <View key={String(item)}>
          <Text style={styles.titleText}>{String(item).toUpperCase()}</Text>
          <Text style={styles.nameText}>{String(characterData[item])}</Text>
        </View>
      ))}
    </View>
  );
};

export default CharacterCardData;
