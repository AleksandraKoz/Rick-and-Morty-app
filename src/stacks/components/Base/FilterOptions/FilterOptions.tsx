import React from 'react';
import { ScrollView, View } from 'react-native';

import { characterStatus } from '../../../../api/characterType';
import { ButtonVariant } from '../Button/ButtonVariants';
import OptionsSection from "../OptionsSection/OptionsSection";
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';
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
                              }: IFilterOptions): React.JSX.Element => (
  <Wrapper style={styles.modalContent}>
    <ScrollView>
      <OptionsSection
        title="STATUS"
        options={STATUS_OPTIONS}
        selectedValue={selectedStatus}
        onToggle={handleStatusToggle}
      />
      <OptionsSection
        title="SPECIES"
        options={SPECIES_OPTIONS}
        selectedValue={selectedSpecies}
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
        onPress={handleApply}
        variant={ButtonVariant.Primary}
      />
    </View>
  </Wrapper>
);

export default FilterOptions;
