import React from 'react';

import TitleText from '../TitleText/TitleText';
import SearchBar from '../SearchBar/SearchBar';

interface IMainScreenHeader {
  searchTerm: string,
  setSearchTerm: (param: string) => void
}

const MainScreenHeader = ({ searchTerm, setSearchTerm }: IMainScreenHeader) => (
  <>
    <TitleText title="Characters"/>
    <SearchBar query={searchTerm} onChangeQuery={setSearchTerm}/>
  </>
);

export default MainScreenHeader;

