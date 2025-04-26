import {View, Image} from 'react-native';
import React from 'react';

import RickAndMortyLogo from '../../../../../assets/Logo/RickAndMorty.png';
import {styles} from "./NavBar.styles";

const NavBar = () => {
  return (
    <View style={styles.navigationBackground}>
      <Image source={RickAndMortyLogo}/>
    </View>
  );
};

export default NavBar;
