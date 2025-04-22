import React from 'react';
import { Text } from 'react-native';

import { styles } from './TitleText.styled';

interface ITitleText {
  title: string;
  type?: 'title' | 'label',
}

const TitleText = ({ title, type = 'title' }: ITitleText): React.JSX.Element => {
  return (
    <Text style={styles[type]}>{title}</Text>
  );
};

export default TitleText;
