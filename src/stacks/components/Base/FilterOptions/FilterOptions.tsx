import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { characterStatus } from "../../../../api/characterType";
import { ButtonVariant } from "../Button/ButtonVariants";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import TitleText from "../TitleText/TitleText";
import { styles } from './FilterOptions.styles';

const STATUS_OPTIONS: characterStatus[] = Object.values(characterStatus);
const SPECIES_OPTIONS: string[] = [ 'Human', 'Humanoid', 'Alien', 'Robot' ];

export const FilterOptions = (): React.JSX.Element => {
  const [ selectedStatus, setSelectedStatus ] = useState<string>('');
  const [ selectedSpecies, setSelectedSpecies ] = useState<string>('');
  
  const handleToggle = (
    toggledOption: string,
    setList: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setList((currentList) =>
      currentList === toggledOption ? '' : toggledOption
    );
  };
  
  const handleReset = () => {
    setSelectedStatus('');
    setSelectedSpecies('');
  };
  
  const handleApply = () => {
    // TODO handle Apply button behavior
  };
  
  const renderOption = (
    label: string,
    selectedList: string,
    onToggle: () => void
  ) => {
    const checked = selectedList === label;
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
        <TitleText title="STATUS" type='label'/>
        {STATUS_OPTIONS.map((status) =>
          renderOption(status, selectedStatus, () =>
            handleToggle(status, setSelectedStatus)
          )
        )}
        <TitleText title="SPECIES" type='label'/>
        {SPECIES_OPTIONS.map((species) =>
          renderOption(species, selectedSpecies, () =>
            handleToggle(species, setSelectedSpecies)
          )
        )}
      </ScrollView>
      <View style={styles.buttonsRow}>
        <Button title='Reset' onPress={handleReset} variant={ButtonVariant.PrimaryOutline}/>
        <Button title='Apply' onPress={handleApply} variant={ButtonVariant.Primary}/>
      </View>
    </Wrapper>
  );
};

export default FilterOptions;
