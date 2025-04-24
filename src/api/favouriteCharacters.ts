import axios from 'axios';
import { Character } from './characterType';

export const fetchFavouriteCharacters = async (
  favouriteIds: number[],
): Promise<Character[]> => {
  if (favouriteIds.length === 0) return [];
  
  const response = await axios.get<Character | Character[]>(
    `https://rickandmortyapi.com/api/character/${favouriteIds.join(',')}`,
  );
  
  return Array.isArray(response.data) ? response.data : [ response.data ];
};
