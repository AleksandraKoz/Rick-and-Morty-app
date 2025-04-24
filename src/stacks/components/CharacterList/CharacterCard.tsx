import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useCharactersContext } from '../../../context/CharactersContext';
import { MainStackNavigationProp } from '../../Main/Main.routes';
import { Character } from '../../../api/characters';
import Wrapper from "../Base/Wrapper/Wrapper";
import { styles } from './CharacterListComponents.styled';
import CharacterCardData from "./CharacterCardData";
import LikeButton from "./LikeButton";

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
    <TouchableOpacity onPress={() => handleCardClick(characterData)}>
      <Wrapper style={styles.cardContainer}>
        <CharacterCardData characterData={characterData}/>
        <View style={styles.imageContainer}>
          <Image source={{ uri: characterData.image }} style={styles.avatar}/>
          <LikeButton character={characterData}/>
        </View>
      </Wrapper>
    </TouchableOpacity>
  );
};

export default CharacterCard;
