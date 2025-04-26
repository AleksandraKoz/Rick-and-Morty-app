import React from 'react';
import { View } from 'react-native';

import TitleText from '../TitleText/TitleText';
import { Character } from '../../../../api/characters';
import { styles } from './CharacterDetailsDataSection.styles';

type FieldKey = keyof Character;

interface ICharacterDetailsDataSection {
  characterData: Character;
  fields: FieldKey[];
  type: 'row' | 'column';
}

const CharacterDetailsDataSection = ({
                                       characterData,
                                       fields,
                                       type,
                                     }: ICharacterDetailsDataSection): React.JSX.Element => {
  const containerStyle =
    type === 'row' ? styles.dataSectionWrapper : styles.infoContainer;
  const itemStyle =
    type === 'row' ? styles.dataCardWrapper : styles.infoItem;
  
  return (
    <View style={containerStyle}>
      {fields.map((field) => {
        const data =
          typeof characterData[field] === 'object' && 'name' in characterData[field]
            ? characterData[field].name
            : String(characterData[field]);
        
        return (
          <View key={String(field)} style={itemStyle}>
            <TitleText title={String(field).toUpperCase()} type="label"/>
            <TitleText title={data} type="data"/>
          </View>
        );
      })}
    </View>
  );
};

export default CharacterDetailsDataSection;
