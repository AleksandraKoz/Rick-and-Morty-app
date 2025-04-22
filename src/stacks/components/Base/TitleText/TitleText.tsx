import React from 'react';
import { Text } from 'react-native';

import { styles } from './TitleText.styled';

type TTitleText = { title: string }

const TitleText = ({ title }: TTitleText) => {
  return (
    <Text style={styles.title}>{title}</Text>
  );
};

export default TitleText;
