import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { characterStatus } from '../../../../api/characterType';
import { ButtonVariant } from '../Button/ButtonVariants';
import OptionsSection from "../OptionsSection/OptionsSection";
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';
import { styles } from './FilterOptions.styles';

const STATUS_OPTIONS: characterStatus[] = Object.values(characterStatus);
const SPECIES_OPTIONS: string[] = [ 'Human', 'Humanoid', 'Alien', 'Robot', 'Animal', 'Disease', 'Cronenberg', 'Poopybutthole', 'Mythological Creature', 'Unknown' ];

interface IFilterOptions {
  handleReset: () => void;
  handleApply: (status: string, species: string) => void;
  selectedStatus: string;
  selectedSpecies: string;
}

export const FilterOptions = ({
                                handleReset,
                                handleApply,
                                selectedStatus,
                                selectedSpecies,
                              }: IFilterOptions): React.JSX.Element => {
  const [ tempSelectedStatus, setTempSelectedStatus ] = useState<string>(selectedStatus)
  const [ tempSelectedSpecies, setTempSelectedSpecies ] = useState<string>(selectedSpecies)
  
  const handleStatusToggle = (option: string) => {
    setTempSelectedStatus(tempSelectedStatus === option ? '' : option);
  };
  
  const handleSpeciesToggle = (option: string) => {
    setTempSelectedSpecies(tempSelectedSpecies === option ? '' : option);
  };
  
  return (
    <Wrapper style={styles.modalContent}>
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
  );
}

export default FilterOptions;
