import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { characterStatus } from '../../../../api/characterType';
import { ButtonVariant } from '../Button/ButtonVariants';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';
import TitleText from '../TitleText/TitleText';
import { styles } from './FilterOptions.styles';

const STATUS_OPTIONS: characterStatus[] = Object.values(characterStatus);
const SPECIES_OPTIONS: string[] = [ 'Human', 'Humanoid', 'Alien', 'Robot', 'Unknown' ];

interface IFilterOptions {
  handleReset: () => void;
  handleApply: () => void;
  selectedStatus: string;
  selectedSpecies: string;
  handleStatusToggle: (option: string) => void;
  handleSpeciesToggle: (option: string) => void;
}

export const FilterOptions = ({
                                handleReset,
                                handleApply,
                                selectedStatus,
                                selectedSpecies,
                                handleStatusToggle,
                                handleSpeciesToggle,
                              }: IFilterOptions): React.JSX.Element => {
  const renderOption = (
    label: string,
    selectedValue: string,
    onToggle: () => void
  ) => {
    const checked = selectedValue === label;
    return (
      <TouchableOpacity
        key={label}
        style={styles.optionRow}
        onPress={onToggle}
      >
        <MaterialCommunityIcons
          name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={20}
          color={checked ? '#224229' : '#DAE4DC'}
          style={{ marginTop: 4, marginRight: 4 }}
        />
        <TitleText title={label} type="data"/>
      </TouchableOpacity>
    );
  };
  
  return (
    <Wrapper>
      <ScrollView>
        <TitleText title="STATUS" type="label"/>
        {STATUS_OPTIONS.map(status =>
          renderOption(
            status,
            selectedStatus,
            () => handleStatusToggle(status)
          )
        )}
        
        <TitleText title="SPECIES" type="label"/>
        {SPECIES_OPTIONS.map(species =>
          renderOption(
            species,
            selectedSpecies,
            () => handleSpeciesToggle(species)
          )
        )}
      </ScrollView>
      
      <View style={styles.buttonsRow}>
        <Button
          title="Reset"
          onPress={handleReset}
          variant={ButtonVariant.PrimaryOutline}
        />
        <Button
          title="Apply"
          onPress={handleApply}
          variant={ButtonVariant.Primary}
        />
      </View>
    </Wrapper>
  );
};

export default FilterOptions;
