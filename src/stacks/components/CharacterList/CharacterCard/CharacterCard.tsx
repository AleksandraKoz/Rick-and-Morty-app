import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CharacterDetailsDataSection from '../../Common/CharacterDataSection/CharacterDataSection';
import LikeButton from '../../Common/LikeButton/LikeButton';
import Wrapper from '../../Common/Wrapper/Wrapper';
import { useCharactersContext } from '../../../../context/CharactersContext';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { Character } from '../../../../api/characters';
import { styles } from './CharacterCard.styles';

type TCharacterListCard = {
  characterData: Character;
};

const CharacterCard = ({ characterData }: TCharacterListCard) => {
  const { setSelectedCharacter } = useCharactersContext();
  const { navigate } = useNavigation<MainStackNavigationProp>();
  const characterKeys: (keyof Character)[] = [ 'name', 'status', 'species' ];
  
  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });
  };
  
  return (
    <Wrapper>
      <TouchableOpacity onPress={() => handleCardClick(characterData)} style={styles.cardContainer}>
        <CharacterDetailsDataSection
          characterData={characterData}
          fields={characterKeys}
          type="column"
        />
        <View style={styles.imageContainer}>
          <Image source={{ uri: characterData.image }} style={styles.avatar}/>
          <LikeButton character={characterData}/>
        </View>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default CharacterCard;
