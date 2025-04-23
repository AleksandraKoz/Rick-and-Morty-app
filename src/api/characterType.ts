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
  location: Record<string, string>;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
