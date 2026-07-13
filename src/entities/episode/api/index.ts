import type { AxiosResponse } from "axios";
import RickAndMortyAPI from "@/shared/api/rick-and-morty-api";
import type { EpisodesResponse } from "@/entities/episode/model/types";

export const getEpisodes = (
  page = 1
): Promise<AxiosResponse<EpisodesResponse>> => {
  return RickAndMortyAPI.get("/episode", {
    params: { page },
  });
};
