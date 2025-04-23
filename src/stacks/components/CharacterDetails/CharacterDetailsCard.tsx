import React from 'react';
import { Text, View } from 'react-native';

import TitleText from '../Base/TitleText/TitleText';
import { styles } from './CharacterDetailsComponents.styled';

interface ICharacterDetailsCard {
  sectionName: string,
  sectionData: string
}

const CharacterDetailsCard = ({ sectionName, sectionData }: ICharacterDetailsCard) => {
  return (
    <View key={sectionName} style={styles.dataWrapper}>
      <TitleText title={sectionName.toUpperCase()} type="label"/>
      <Text>{sectionData}</Text>
    </View>
  );
};

export default CharacterDetailsCard;
