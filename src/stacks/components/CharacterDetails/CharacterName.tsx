import React from 'react';
import { View } from 'react-native';

import TitleText from "../Base/TitleText/TitleText";
import { styles } from './CharacterDetailsComponents.styled';

type TCharacterName = { name: string }

const CharacterName = ({ name }: TCharacterName) => {
  return (
    <View style={styles.nameWrapper}>
      <TitleText title="NAME" type="label"/>
      <TitleText title={name}/>
    </View>
  );
};

export default CharacterName;
