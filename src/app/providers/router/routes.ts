import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/app/layouts/MainLayout.vue";

export enum RouteNames {
  MAIN_LAYOUT = "MainLayout",
  CHARACTERS_PAGE = "CharactersPage",
  EPISODES_PAGE = "EpisodesPage",
  NOT_FOUND_PAGE = "NotFoundPage",
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN_LAYOUT]: "/",
  [RouteNames.CHARACTERS_PAGE]: "characters",
  [RouteNames.EPISODES_PAGE]: "episodes",
  [RouteNames.NOT_FOUND_PAGE]: "/:pathMatch(.*)*",
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.MainLayout,
    name: RouteNames.MAIN_LAYOUT,
    component: MainLayout,
    children: [
      {
        path: RoutePaths.CharactersPage,
        name: RouteNames.CHARACTERS_PAGE,
        component: () => import("@/pages/characters/ui/CharactersPage.vue"),
      },
      {
        path: RoutePaths.EpisodesPage,
        name: RouteNames.EPISODES_PAGE,
        component: () => import("@/pages/episodes/ui/EpisodesPage.vue"),
      },
    ],
  },
  {
    path: RoutePaths.NotFoundPage,
    name: RouteNames.NOT_FOUND_PAGE,
    component: () => import("@/pages/not-found/ui/NotFoundPage.vue"),
  },
];
