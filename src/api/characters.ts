import axios from 'axios';
import { Character } from './characterType';

export type CharactersResponse = {
  info: {
    next: string | null;
    pages: number;
  };
  results: Character[];
};

type TFetchCharactersByPage = {
  pageParam?: number | unknown,
  searchedName?: string
  filteredStatus?: string
  filteredSpecies?: string
}

export const fetchCharactersByPage = async (
  {
    pageParam = 1,
    searchedName = '',
    filteredStatus = '',
    filteredSpecies = '',
  }: TFetchCharactersByPage,
): Promise<CharactersResponse> => {
  const response = await axios.get<CharactersResponse>(
    `https://rickandmortyapi.com/api/character?page=${pageParam}&name=${searchedName.trim()}&species=${filteredSpecies}&status=${filteredStatus}`,
  );
  return response.data;
};

