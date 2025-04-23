import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './CharacterDetailsComponents.styled';
import { FontAwesome } from "@expo/vector-icons";

const WideLikeButton = () => {
  const buttonName: string = 'ADD TO LIKED'
  
  return (
    <TouchableOpacity style={styles.likeButtonWrapper}>
      <FontAwesome name="star-o" color="#fff"/>
      <Text style={styles.likeText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default WideLikeButton;
