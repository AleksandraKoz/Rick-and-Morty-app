import React from 'react';
import { Animated, Image, SafeAreaView, } from 'react-native';
import { RouteProp, useRoute, } from '@react-navigation/native';

import NavBar from '../../../components/Base/NavBar/NavBar';
import Wrapper from '../../../components/Base/Wrapper/Wrapper';
import { styles } from './CharacterDetails.styled';
import CharacterName from '../../../components/CharacterDetails/CharacterName';
import WideLikeButton from '../../../components/CharacterDetails/WideLikeButton';
import CharacterDetailsDataSection from '../../../components/CharacterDetails/CharacterDetailsDataSection';
import { CharacterDetailsStackParamList } from '../../CharacterDetails.routes';
import GoBackButton from "../../../components/Base/GoBackButton/GoBackButton";
import ScrollView = Animated.ScrollView;

type DetailsRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const { params } = useRoute<DetailsRouteProp>();
  const { character } = params;
  
  return (
    <SafeAreaView style={styles.background}>
      <NavBar/>
      <ScrollView style={styles.container}>
        <GoBackButton screenName='Characters List'/>
        <Wrapper style={{ padding: 24 }}>
          <Image source={{ uri: character.image }} style={styles.avatar}/>
          <CharacterName name={character.name}/>
          <CharacterDetailsDataSection characterData={character}/>
          <WideLikeButton/>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterDetailsScreen;
