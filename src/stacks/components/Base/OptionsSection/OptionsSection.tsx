import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TitleText from '../TitleText/TitleText';
import { styles } from './OptionsSection.styles';

interface IOptionsSection {
  title: string;
  options: string[];
  selectedValue: string;
  onToggle: (value: string) => void;
}

const OptionsSection = ({
                          title,
                          options,
                          selectedValue,
                          onToggle,
                        }: IOptionsSection): React.JSX.Element => (
  <View style={styles.optionMargin}>
    <TitleText title={title} type="label"/>
    {options.map(option => {
      const checked = selectedValue === option;
      return (
        <TouchableOpacity
          key={option}
          style={styles.optionRow}
          onPress={() => onToggle(option)}
        >
          <MaterialCommunityIcons
            name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={20}
            color={checked ? '#224229' : '#DAE4DC'}
            style={styles.iconMargins}
          />
          <TitleText title={option} type="data"/>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default OptionsSection;
