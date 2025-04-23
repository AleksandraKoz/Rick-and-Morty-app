import React from 'react';
import { View } from 'react-native';

import CharacterDetailsCard from './CharacterDetailsCard';
import { Character } from '../../../api/characterType';
import { styles } from './CharacterDetailsComponents.styled';

type TCharacterDetailsScreen = {
  characterData: Character
}

const CharacterDetailsDataSection = ({ characterData }: TCharacterDetailsScreen) => {
  const characterKeys: (keyof Character)[] = [ 'status', 'species', 'gender', 'origin' ];
  
  return (
    <View style={styles.dataSectionWrapper}>
      {characterKeys.map((item) => (
        <CharacterDetailsCard
          key={String(item)}
          sectionName={String(item)}
          sectionData={characterData[item].name || String(characterData[item])}/>
      ))}
    </View>
  )
};

export default CharacterDetailsDataSection;
