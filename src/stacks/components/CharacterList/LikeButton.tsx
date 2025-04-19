import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './CharacterListComponents.styled';

const LikeButton = () => {
  return (
    <TouchableOpacity style={styles.likeButton}>
      <FontAwesome name="star" size={16} color="#F89F34"/>
      <Text style={styles.likeText}>LIKE</Text>
    </TouchableOpacity>
  );
};

export default LikeButton;
