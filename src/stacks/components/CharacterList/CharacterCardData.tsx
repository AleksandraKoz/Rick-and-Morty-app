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
        <>
          <Text style={styles.titleText}>{item.toUpperCase()}</Text>
          <Text style={styles.nameText}>{characterData[item]}</Text>
        </>
      ))}
    </View>
  );
};

export default CharacterCardData;
