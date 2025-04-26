import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CharacterCardData from './CharacterCardData';
import Wrapper from '../Common/Wrapper/Wrapper';
import LikeButton from '../Common/LikeButton/LikeButton';
import { useCharactersContext } from '../../../context/CharactersContext';
import { MainStackNavigationProp } from '../../Main/Main.routes';
import { Character } from '../../../api/characters';
import { styles } from './CharacterListComponents.styled';

type TCharacterListCard = {
  characterData: Character;
};

const CharacterCard = ({ characterData }: TCharacterListCard) => {
  const { setSelectedCharacter } = useCharactersContext();
  const { navigate } = useNavigation<MainStackNavigationProp>();
  
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
        <CharacterCardData characterData={characterData}/>
        <View style={styles.imageContainer}>
          <Image source={{ uri: characterData.image }} style={styles.avatar}/>
          <LikeButton character={characterData}/>
        </View>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default CharacterCard;
