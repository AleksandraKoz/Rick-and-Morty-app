import React from 'react';
import { View } from 'react-native';

import TitleText from '../../Common/TitleText/TitleText';
import { styles } from '../CharacterDetailsComponents.styled';

interface ICharacterDetailsCard {
  sectionName: string,
  sectionData: string
}

const CharacterDetailsCard = ({ sectionName, sectionData }: ICharacterDetailsCard) => {
  return (
    <View key={sectionName} style={styles.dataCardWrapper}>
      <TitleText title={sectionName.toUpperCase()} type="label"/>
      <TitleText title={sectionData} type="data"/>
    </View>
  );
};

export default CharacterDetailsCard;
