import React, { useState } from 'react';
import { Text, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from "./FilterButton.styles";

const FilterButton = () => {
  const [ isClicked, setIsClicked ] = useState<boolean>(false);
  
  const handleButtonClick = () => {
    setIsClicked((prevState): boolean => !prevState)
  }
  return (
    <TouchableOpacity style={styles.filterButton} onPress={handleButtonClick}>
      <Text style={styles.filterText}>FILTER</Text>
      <AntDesign name={isClicked ? "up" : "down"} size={10} color="#fff" style={styles.icon}/>
    </TouchableOpacity>
  );
}

export default FilterButton;
