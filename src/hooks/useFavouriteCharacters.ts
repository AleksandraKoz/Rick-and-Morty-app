import { useQuery } from '@tanstack/react-query';

import { useCharactersContext } from '../context/CharactersContext';
import { fetchFavouriteCharacters } from '../api/favouriteCharacters';
import { Character } from '../api/characterType';

export const useFavouriteCharacters = () => {
  const { favouriteCharactersList } = useCharactersContext();
  
  return useQuery<Character[], Error>({
    queryKey: [ 'favourites', favouriteCharactersList ],
    queryFn: () =>
      fetchFavouriteCharacters(favouriteCharactersList),
    enabled: favouriteCharactersList.length > 0,
    initialData: [] as Character[],
  });
};
