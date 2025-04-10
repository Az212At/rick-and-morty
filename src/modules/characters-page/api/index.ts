import type { AxiosResponse } from "axios";
import RickAndMortyAPI from "@/package/config/rick-and-morty-api";
import type { Character } from "@/modules/characters-page/types";

export const getCharacters = (): Promise<
  AxiosResponse<{ results: Character[] }>
> => {
  return RickAndMortyAPI.get("/character");
};
