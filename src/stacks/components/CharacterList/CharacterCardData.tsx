import React from 'react';
import { View } from 'react-native';

import { Character } from '../../../api/characters';
import { styles } from './CharacterListComponents.styled';
import TitleText from "../Base/TitleText/TitleText";

type TCharacterCardData = {
  characterData: Character;
};

const CharacterCardData = ({ characterData }: TCharacterCardData) => {
  const characterKeys: (keyof Character)[] = [ 'name', 'status', 'species' ];
  
  return (
    <View style={styles.infoContainer}>
      {characterKeys.map((item) => (
        <View key={String(item)} style={styles.infoItem}>
          <TitleText title={String(item).toUpperCase()} type="label"/>
          <TitleText title={String(characterData[item])} type="data"/>
        </View>
      ))}
    </View>
  );
};

export default CharacterCardData;
