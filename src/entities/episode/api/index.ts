import type { AxiosResponse } from "axios";
import RickAndMortyAPI from "@/shared/api/rick-and-morty-api";
import type { Episode } from "../model/types";

export const getEpisodes = (
  page = 1
): Promise<AxiosResponse<{ results: Episode[] }>> => {
  return RickAndMortyAPI.get("/episode", {
    params: { page },
  });
};