export enum characterStatus {
  Alive = 'Alive',
  Dead = "Dead",
  Unknown = 'unknown'
}

export enum characterGender {
  Female = 'Female',
  Male = "Male",
  Genderless = "Genderless",
  Unknown = 'unknown'
}

export enum CharacterSpecies {
  Human = 'Human',
  Humanoid = 'Humanoid',
  Alien = 'Alien',
  Robot = 'Robot',
  Animal = 'Animal',
  Disease = 'Disease',
  Cronenberg = 'Cronenberg',
  Poopybutthole = 'Poopybutthole',
  MythologicalCreature = 'Mythological Creature',
  Unknown = 'Unknown',
}

export type Character = {
  id: number;
  name: string;
  status: characterStatus;
  species: string;
  type: string;
  gender: characterGender;
  origin: {
    name: string,
    url: string,
  };
  location: {
    name: string,
    url: string,
  }
  image: string;
  episode: string[];
  url: string;
  created: string;
};
