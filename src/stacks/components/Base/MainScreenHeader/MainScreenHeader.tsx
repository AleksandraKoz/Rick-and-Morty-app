import React from 'react';
import TitleText from '../TitleText/TitleText';
import SearchBar from '../SearchBar/SearchBar';
import FilterButton from '../FilterButton/FilterButton';

interface IMainScreenHeader {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (species: string) => void;
}

const MainScreenHeader = ({
                            searchTerm,
                            setSearchTerm,
                            selectedStatus,
                            setSelectedStatus,
                            selectedSpecies,
                            setSelectedSpecies,
                          }: IMainScreenHeader): React.JSX.Element => (
  <>
    <TitleText title="Characters"/>
    <SearchBar query={searchTerm} onChangeQuery={setSearchTerm}/>
    <FilterButton
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      selectedSpecies={selectedSpecies}
      setSelectedSpecies={setSelectedSpecies}
    />
  </>
);

export default MainScreenHeader;
