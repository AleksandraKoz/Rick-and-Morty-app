import {Button, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';

import NavBar from "../../../components/Base/NavBar/NavBar";
import TitleText from "../../../components/Base/TitleText/TitleText";

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <NavBar/>
      <View style={styles.container}>
        <TitleText title="Characters"/>
        <Button
          title="Navigate to Details screen"
          onPress={(): void => {
            navigate('CharacterDetailsStack', {
              screen: 'CharacterDetailsScreen',
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CharacterListScreen;
