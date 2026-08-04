export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export enum CharacterGender {
  Male = "Male",
  Female = "Female",
  Unknown = "unknown",
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}