import axios from 'axios';
import { Character } from './characterType';

type CharactersResponse = {
  results: Character[];
};

export const fetchAllCharacters = async (): Promise<Character[]> => {
  const response = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  return response.data.results;
};
