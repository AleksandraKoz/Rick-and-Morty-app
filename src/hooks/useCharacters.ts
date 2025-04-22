import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharactersByPage } from '../api/characters';

export const useCharacters = () => {
  return useInfiniteQuery({
    queryKey: [ 'characters' ],
    queryFn: ({ pageParam = 1 }) => fetchCharactersByPage({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const url = lastPage.info.next;
      if (!url) return undefined;
      const nextPage = new URL(url).searchParams.get('page');
      return nextPage ? Number(nextPage) : undefined;
    },
  });
};
