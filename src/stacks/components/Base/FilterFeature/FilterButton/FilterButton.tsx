import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import FilterOptions from '../FilterOptions/FilterOptions';
import { styles } from './FilterButton.styles';

interface IFilterButton {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (species: string) => void;
  isFilterClicked: boolean;
  handleFilterButtonClick: (canExecute: boolean) => void;
}

const FilterButton = ({
                        selectedStatus,
                        setSelectedStatus,
                        selectedSpecies,
                        setSelectedSpecies,
                        isFilterClicked,
                        handleFilterButtonClick
                      }: IFilterButton): React.JSX.Element => {
  
  const handleApply = (status: string, species: string) => {
    setSelectedStatus(status);
    setSelectedSpecies(species);
    handleFilterButtonClick(true)
  };
  
  return (
    <>
      <TouchableOpacity
        style={{ ...styles.filterButton, backgroundColor: isFilterClicked ? '#162C1B' : '#224229' }}
        onPress={() => handleFilterButtonClick(true)}
      >
        <Text style={styles.filterText}>FILTER</Text>
        <AntDesign
          name={isFilterClicked ? 'up' : 'down'}
          size={10}
          color="#fff"
          style={styles.icon}
        />
      </TouchableOpacity>
      {isFilterClicked && (
        <View style={styles.dropdown}>
          <FilterOptions
            handleApply={handleApply}
            selectedStatus={selectedStatus}
            selectedSpecies={selectedSpecies}
            handleFilterButtonClick={() => handleFilterButtonClick(false)}
          />
        </View>
      )}
    </>
  );
};

export default FilterButton;
