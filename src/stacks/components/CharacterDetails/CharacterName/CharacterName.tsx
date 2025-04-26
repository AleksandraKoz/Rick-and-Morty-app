import React from 'react';
import { View } from 'react-native';

import TitleText from '../../Common/TitleText/TitleText';
import { styles } from './CharacterName.styles';

type TCharacterName = { name: string }

const CharacterName = ({ name }: TCharacterName): React.JSX.Element => {
  return (
    <View style={styles.nameWrapper}>
      <TitleText title="NAME" type="label"/>
      <TitleText title={name}/>
    </View>
  );
};

export default CharacterName;
