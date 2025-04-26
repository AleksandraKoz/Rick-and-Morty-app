import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Character } from "../../../../api/characterType";
import { useCharactersContext } from "../../../../context/CharactersContext";
import { styles } from "./LikeButton.styles";

interface ILikeButton {
  character?: Character;
  variant?: 'narrow' | 'wide';
}

const LikeButton = ({
                      character,
                      variant = 'narrow',
                    }: ILikeButton): React.JSX.Element => {
  const {
    selectedCharacter,
    favouriteCharactersList,
    addCharacterToFavourites,
    removeCharacterFromFavourites,
  } = useCharactersContext();
  
  const characterData = character ?? selectedCharacter;
  
  const isFavouriteCharacter = favouriteCharactersList.includes(characterData.id);
  
  const handleLikeButton = () => {
    if (isFavouriteCharacter) removeCharacterFromFavourites(characterData.id);
    else addCharacterToFavourites(characterData.id);
  };
  
  const buttonName: string =
    variant === 'wide'
      ? isFavouriteCharacter
        ? 'REMOVE FROM LIKED'
        : 'ADD TO LIKED'
      : 'LIKE';
  
  const iconInactiveColor: string = variant === 'wide' ? '#FFFFFF' : '#224229';
  const wrapperStyle = variant === 'wide' ? styles.likeButtonWide : styles.likeButton;
  const textStyle = variant === 'wide' ? styles.likeTextWide : styles.likeText;
  
  return (
    <TouchableOpacity style={wrapperStyle} onPress={handleLikeButton}>
      <FontAwesome
        name={isFavouriteCharacter ? 'star' : 'star-o'}
        size={variant === 'wide' ? 20 : 16}
        color={isFavouriteCharacter ? '#F89F34' : iconInactiveColor}
      />
      <Text style={textStyle}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default LikeButton;
