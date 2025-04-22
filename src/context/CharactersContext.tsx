import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Character } from '../api/characters';

type CharactersContextType = {
  characters: Character[];
  setCharacters: (chars: Character[]) => void;
  selectedCharacter: Character | null;
  setSelectedCharacter: (char: Character | null) => void;
};

const CharactersContext = createContext<CharactersContextType | undefined>(undefined);

export const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [ characters, setCharacters ] = useState<Character[]>([]);
  const [ selectedCharacter, setSelectedCharacter ] = useState<Character | null>(null);
  
  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        selectedCharacter,
        setSelectedCharacter,
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
