import axios from 'axios';
import { Character } from './characterType';

type CharactersResponse = {
  info: {
    next: string | null;
    pages: number;
  };
  results: Character[];
};

export const fetchCharactersByPage = async ({ pageParam = 1 }): Promise<CharactersResponse> => {
  const response = await axios.get<CharactersResponse>(
    `https://rickandmortyapi.com/api/character?page=${pageParam}`
  );
  return response.data;
};
