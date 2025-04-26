import React from 'react';
import { Image, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp, useRoute, } from '@react-navigation/native';

import NavBar from '../../../components/Common/NavBar/NavBar';
import Wrapper from '../../../components/Common/Wrapper/Wrapper';
import LikeButton from '../../../components/Common/LikeButton/LikeButton';
import GoBackButton from '../../../components/CharacterDetails/GoBackButton/GoBackButton';
import CharacterName from '../../../components/CharacterDetails/CharacterName/CharacterName';
import CharacterDataSection from '../../../components/Common/CharacterDataSection/CharacterDataSection';
import { CharacterDetailsStackParamList } from '../../CharacterDetails.routes';
import { Character } from '../../../../api/characterType';
import { styles } from './CharacterDetails.styled';

type DetailsRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const { params } = useRoute<DetailsRouteProp>();
  const { character } = params;
  
  const characterKeys: (keyof Character)[] = [ 'status', 'species', 'gender', 'origin' ];
  
  return (
    <SafeAreaView style={styles.background}>
      <NavBar/>
      <ScrollView style={styles.container}>
        <GoBackButton screenName='Characters List'/>
        <Wrapper style={{ padding: 24 }}>
          <Image source={{ uri: character.image }} style={styles.avatar}/>
          <CharacterName name={character.name}/>
          <CharacterDataSection
            characterData={character}
            fields={characterKeys}
            type="row"
          />
          <LikeButton variant="wide"/>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CharacterDetailsScreen;
