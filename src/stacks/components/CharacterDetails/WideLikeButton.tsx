import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './CharacterDetailsComponents.styled';
import { useCharactersContext } from '../../../context/CharactersContext';

const WideLikeButton = () => {
  const {
    selectedCharacter,
    favouriteCharactersList,
    addCharacterToFavourites,
    removeCharacterFromFavourites,
  } = useCharactersContext();
  
  const isFavouriteCharacter: boolean = favouriteCharactersList.includes(selectedCharacter.id);
  
  const handleLikeButton = () => {
    if (isFavouriteCharacter) removeCharacterFromFavourites(selectedCharacter.id);
    else addCharacterToFavourites(selectedCharacter.id);
  };
  
  const buttonName: string = isFavouriteCharacter ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'
  
  return (
    <TouchableOpacity
      style={styles.likeButtonWrapper}
      onPress={handleLikeButton}
    >
      <FontAwesome
        name={isFavouriteCharacter ? 'star' : 'star-o'}
        size={20}
        color={isFavouriteCharacter ? '#F89F34' : '#fff'}
      />
      <Text style={styles.likeText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default WideLikeButton;
