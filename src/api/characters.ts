import axios from 'axios';

enum characterStatus {
  Alive = 'Alive',
  Dead = "Dead",
  Unknown = 'unknown'
}

enum characterGender {
  Female = 'Female',
  Male = "Male",
  Genderless = "Genderless",
  Unknown = 'unknown'
}

export type Character = {
  id: number;
  name: string;
  status: characterStatus;
  species: string;
  type: string;
  gender: characterGender;
  origin: Record<string, string>;
  location: Record<string, string>;
  image: string;
};

type CharactersResponse = {
  results: Character[];
};

export const fetchAllCharacters = async (): Promise<Character[]> => {
  const response = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  return response.data.results;
};
