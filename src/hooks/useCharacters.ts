import { useInfiniteQuery } from '@tanstack/react-query';
import { CharactersResponse, fetchCharactersByPage } from '../api/characters';

export const useCharacters = (
  searchedName: string = '',
  filteredStatus: string = '',
  filteredSpecies: string = '',
) =>
  useInfiniteQuery<
    CharactersResponse,
    Error,
    CharactersResponse,
    [ 'characters', string, string, string ]
  >({
    queryKey: [ 'characters', searchedName, filteredSpecies, filteredStatus ],
    queryFn: ({ pageParam = 1 }) =>
      fetchCharactersByPage({
        pageParam,
        searchedName,
        filteredStatus,
        filteredSpecies,
      }),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (!lastPage.info.next) {
        return undefined;
      }
      const url = new URL(lastPage.info.next);
      const nextPage = url.searchParams.get('page');
      return nextPage ? Number(nextPage) : undefined;
    },
  });
