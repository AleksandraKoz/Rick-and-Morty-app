import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Character } from '../api/characterType';

export const useFavouriteCharacters = (favouriteCharactersIdList: number[]) => {
  return useQuery<Character[], Error>({
    queryKey: [ 'favourites', favouriteCharactersIdList ],
    queryFn: async () => {
      if (favouriteCharactersIdList.length === 0) return [];
      const responseData = await axios.get<Character | Character[]>(
        `https://rickandmortyapi.com/api/character/${favouriteCharactersIdList.join(',')}`,
      );
      return Array.isArray(responseData.data) ? responseData.data : [ responseData.data ];
    },
    enabled: true,
  });
};


