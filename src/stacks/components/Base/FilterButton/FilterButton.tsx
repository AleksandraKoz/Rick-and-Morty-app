import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from "./FilterButton.styles";
import FilterPanel from "../FilterOptions/FilterOptions";

const FilterButton = () => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  
  const handleButtonClick = () => {
    setIsClicked((prevState): boolean => !prevState)
  }
  return (
    <>
      <TouchableOpacity style={styles.filterButton} onPress={handleButtonClick}>
        <Text style={styles.filterText}>FILTER</Text>
        <AntDesign name={isClicked ? "up" : "down"} size={10} color="#fff" style={styles.icon}/>
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
        <View style={styles.modalContent}>
          <FilterPanel/>
        </View>
      </Modal>
    </>
  );
}

export default FilterButton;
