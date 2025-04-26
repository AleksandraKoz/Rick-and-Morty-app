import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

import { CharacterSpecies, characterStatus } from '../../../../../api/characterType';
import { ButtonVariant } from '../../../Common/Button/ButtonVariants';
import OptionsSection from "../OptionsSection/OptionsSection";
import Button from '../../../Common/Button/Button';
import Wrapper from '../../../Common/Wrapper/Wrapper';
import { styles } from './FilterOptions.styles';

const STATUS_OPTIONS: characterStatus[] = Object.values(characterStatus);
export const SPECIES_OPTIONS: string[] = Object.values(CharacterSpecies);

interface IFilterOptions {
  handleApply: (status: string, species: string) => void;
  selectedStatus: string;
  selectedSpecies: string;
  handleFilterButtonClick: () => void
}

export const FilterOptions = ({
                                handleApply,
                                selectedStatus,
                                selectedSpecies,
                                handleFilterButtonClick
                              }: IFilterOptions): React.JSX.Element => {
  const [ tempSelectedStatus, setTempSelectedStatus ] = useState<string>(selectedStatus)
  const [ tempSelectedSpecies, setTempSelectedSpecies ] = useState<string>(selectedSpecies)
  
  const handleStatusToggle = (option: string) => {
    setTempSelectedStatus(tempSelectedStatus === option ? '' : option);
  };
  
  const handleSpeciesToggle = (option: string) => {
    setTempSelectedSpecies(tempSelectedSpecies === option ? '' : option);
  };
  
  const handleReset = () => {
    setTempSelectedStatus('');
    setTempSelectedSpecies('');
  };
  
  return (
    <Pressable onPress={handleFilterButtonClick} style={styles.modalContent}>
      <Wrapper style={styles.wrapperContent}>
        <ScrollView>
          <OptionsSection
            title="STATUS"
            options={STATUS_OPTIONS}
            selectedValue={tempSelectedStatus}
            onToggle={handleStatusToggle}
          />
          <OptionsSection
            title="SPECIES"
            options={SPECIES_OPTIONS}
            selectedValue={tempSelectedSpecies}
            onToggle={handleSpeciesToggle}
          />
        </ScrollView>
        <View style={styles.buttonsRow}>
          <Button
            title="Reset"
            onPress={handleReset}
            variant={ButtonVariant.PrimaryOutline}
          />
          <Button
            title="Apply"
            onPress={() => handleApply(tempSelectedStatus, tempSelectedSpecies)}
            variant={ButtonVariant.Primary}
          />
        </View>
      </Wrapper>
    </Pressable>
  );
}

export default FilterOptions;
