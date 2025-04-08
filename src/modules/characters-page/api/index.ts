import API from "@/package/config/axios";
import { Character } from "@/modules/characters-page/types";
import type { AxiosResponse } from "axios";

export const getCharacters = (): Promise<
  AxiosResponse<{ results: Character[] }>
> => {
  return API.get("/character");
};
