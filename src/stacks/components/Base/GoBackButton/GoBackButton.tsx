import React from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useNavigation, } from '@react-navigation/native';

import { CharacterDetailsStackNavigationProp } from '../../../CharacterDetails/CharacterDetails.routes';
import { styles } from './GoBackButton.styles';

type TGoBackButton = {
  screenName: 'Characters List' | 'Favourites List'
}

const GoBackButton = ({ screenName }: TGoBackButton) => {
  const navigation = useNavigation<CharacterDetailsStackNavigationProp>();
  const buttonTitle = '← Go back to '
  
  const handleGoBack = () => {
    navigation.goBack()
  }
  
  return (
    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
      <Text style={styles.backButtonText}>{buttonTitle}{screenName}</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
