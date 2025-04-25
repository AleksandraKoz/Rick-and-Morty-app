import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import FilterOptions from '../FilterOptions/FilterOptions';
import { styles } from './FilterButton.styles';

interface IFilterButton {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (species: string) => void;
}

const FilterButton = ({
                        selectedStatus,
                        setSelectedStatus,
                        selectedSpecies,
                        setSelectedSpecies,
                      }: IFilterButton): React.JSX.Element => {
  const [ isClicked, setIsClicked ] = useState(false);
  
  const handleButtonClick = () => {
    setIsClicked(prevState => !prevState);
  };
  
  const handleApply = (status: string, species: string) => {
    setSelectedStatus(status);
    setSelectedSpecies(species);
    handleButtonClick()
  };
  
  const handleReset = () => {
    setSelectedStatus('');
    setSelectedSpecies('');
  };
  
  return (
    <>
      <TouchableOpacity
        style={{ ...styles.filterButton, backgroundColor: isClicked ? '#162C1B' : '#224229' }}
        onPress={handleButtonClick}
      >
        <Text style={styles.filterText}>FILTER</Text>
        <AntDesign
          name={isClicked ? 'up' : 'down'}
          size={10}
          color="#fff"
          style={styles.icon}
        />
      </TouchableOpacity>
      
      <Modal
        visible={isClicked}
        transparent
        animationType="fade"
        onRequestClose={handleButtonClick}
      >
        <TouchableWithoutFeedback onPress={handleButtonClick}>
          <View style={styles.modalOverlay}/>
        </TouchableWithoutFeedback>
        <FilterOptions
          handleReset={handleReset}
          handleApply={handleApply}
          selectedStatus={selectedStatus}
          selectedSpecies={selectedSpecies}
        />
      </Modal>
    </>
  );
};

export default FilterButton;
