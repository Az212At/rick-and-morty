import type { AxiosResponse } from "axios";
import type { Character } from "@/entities/character/model/types";
import RickAndMortyAPI from "@/shared/api/rick-and-morty-api";

export const getCharacters = (): Promise<
  AxiosResponse<{ results: Character[] }>
> => {
  return RickAndMortyAPI.get("/character");
};
