import { useQuery } from '@tanstack/react-query';
import { fetchAllCharacters } from '../api/characters';

export const useCharacters = () => {
  return useQuery({
    queryKey: [ 'characters' ],
    queryFn: fetchAllCharacters,
  });
};
