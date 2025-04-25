import React from 'react';

import TitleText from '../TitleText/TitleText';
import SearchBar from '../SearchBar/SearchBar';
import FilterButton from "../FilterButton/FilterButton";

interface IMainScreenHeader {
  searchTerm: string,
  setSearchTerm: (param: string) => void
}

const buttonName = 'FILTER'

const MainScreenHeader = ({ searchTerm, setSearchTerm }: IMainScreenHeader) => (
  <>
    <TitleText title="Characters"/>
    <SearchBar query={searchTerm} onChangeQuery={setSearchTerm}/>
    <FilterButton/>
  </>
);

export default MainScreenHeader;

