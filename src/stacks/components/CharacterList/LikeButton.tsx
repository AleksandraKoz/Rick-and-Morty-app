import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { useCharactersContext } from '../../../context/CharactersContext';
import { Character } from '../../../api/characterType';
import { styles } from './CharacterListComponents.styled';

type LikeButtonProps = {
  character: Character;
};

const LikeButton = ({ character }: LikeButtonProps) => {
  const {
    favouriteCharactersList,
    addCharacterToFavourites,
    removeCharacterFromFavourites,
  } = useCharactersContext();
  
  const isFavouriteCharacter: boolean = favouriteCharactersList.includes(character.id);
  const buttonName: string = 'LIKE'
  
  const handleLikeButton = () => {
    if (isFavouriteCharacter) removeCharacterFromFavourites(character.id);
    else addCharacterToFavourites(character.id);
  };
  
  return (
    <TouchableOpacity style={styles.likeButton} onPress={handleLikeButton}>
      <FontAwesome
        name={isFavouriteCharacter ? 'star' : 'star-o'}
        size={16}
        color={isFavouriteCharacter ? '#F89F34' : '#224229'}
      />
      <Text style={styles.likeText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default LikeButton;
