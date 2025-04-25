import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Character } from '../api/characters';

const FAVORITES_KEY = '@favourite_characters';

type CharactersContextType = {
  characters: Character[];
  setCharacters: (chars: Character[]) => void;
  selectedCharacter: Character | null;
  setSelectedCharacter: (char: Character | null) => void;
  favouriteCharactersList: number[];
  addCharacterToFavourites: (characterId: number) => void;
  removeCharacterFromFavourites: (characterId: number) => void;
};

const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

export const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [ characters, setCharacters ] = useState<Character[]>([]);
  const [ selectedCharacter, setSelectedCharacter ] = useState<Character | null>(null);
  const [ favouriteCharactersList, setFavouriteCharactersList ] = useState<
    number[]
  >([]);
  
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(FAVORITES_KEY);
        if (stored) {
          setFavouriteCharactersList(JSON.parse(stored));
        }
      } catch (e) {
        console.warn('Unable to load favourite characters list. Error message: ', e);
      }
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(
          FAVORITES_KEY,
          JSON.stringify(favouriteCharactersList)
        );
      } catch (e) {
        console.warn('Unable to save favourite characters list. Error message: ', e);
      }
    })();
  }, [ favouriteCharactersList ]);
  
  const addCharacterToFavourites = (characterId: number) => {
    setFavouriteCharactersList([ ...favouriteCharactersList, characterId ])
  };
  
  const removeCharacterFromFavourites = (characterId: number) => {
    const updatedFavouriteCharacters = favouriteCharactersList.filter((id) => id !== characterId);
    
    setFavouriteCharactersList(updatedFavouriteCharacters)
  };
  
  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        selectedCharacter,
        setSelectedCharacter,
        favouriteCharactersList,
        addCharacterToFavourites,
        removeCharacterFromFavourites,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharactersContext = (): CharactersContextType => {
  const context = useContext(CharactersContext);
  if (!context) throw new Error('You cannot use context here');
  return context;
};
