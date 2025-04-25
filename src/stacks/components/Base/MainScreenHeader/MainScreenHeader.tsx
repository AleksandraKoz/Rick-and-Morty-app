import React from 'react';
import { View } from 'react-native';

import TitleText from '../TitleText/TitleText';
import SearchBar from '../SearchBar/SearchBar';
import FilterButton from '../FilterButton/FilterButton';
import { styles } from './MainScreenHeader.styles';

interface IMainScreenHeader {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isAllCharactersScreen?: boolean;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (species: string) => void;
}

const MainScreenHeader = ({
                            searchTerm,
                            setSearchTerm,
                            isAllCharactersScreen = false,
                            selectedStatus,
                            setSelectedStatus,
                            selectedSpecies,
                            setSelectedSpecies,
                          }: IMainScreenHeader): React.JSX.Element => (
  <View style={styles.headerBackground}>
    <TitleText title="Characters"/>
    <SearchBar query={searchTerm} onChangeQuery={setSearchTerm}/>
    {isAllCharactersScreen &&
      <FilterButton
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
      />
    }
  </View>
);

export default MainScreenHeader;
