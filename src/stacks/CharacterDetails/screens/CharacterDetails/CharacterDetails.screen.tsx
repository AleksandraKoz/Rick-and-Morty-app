import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import NavBar from '../../../components/Base/NavBar/NavBar';
import Wrapper from '../../../components/Base/Wrapper/Wrapper';
import { styles } from './CharacterDetails.styled';
import CharacterName from '../../../components/CharacterDetails/CharacterName';
import WideLikeButton from '../../../components/CharacterDetails/WideLikeButton';
import CharacterDetailsDataSection from '../../../components/CharacterDetails/CharacterDetailsDataSection';
import { CharacterDetailsStackNavigationProp, CharacterDetailsStackParamList } from "../../CharacterDetails.routes";

type DetailsRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const navigation = useNavigation<CharacterDetailsStackNavigationProp>();
  const { params } = useRoute<DetailsRouteProp>();
  const { character } = params
  
  return (
    <SafeAreaView style={styles.background}>
      <NavBar/>
      <View style={styles.container}>
        <Wrapper style={{ padding: 24 }}>
          <Image source={{ uri: character.image }} style={styles.avatar}/>
          <CharacterName name={character.name}/>
          <CharacterDetailsDataSection characterData={character}/>
          <WideLikeButton/>
        </Wrapper>
      </View>
    </SafeAreaView>
  );
};

export default CharacterDetailsScreen;
