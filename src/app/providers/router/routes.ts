import { RouteRecordRaw } from "vue-router";
import LoginLayout from "@/app/layouts/LoginLayout.vue";
import MainLayout from "@/app/layouts/MainLayout.vue";

export enum RouteNames {
  LOGIN_LAYOUT = "LoginLayout",
  LOGIN_PAGE = "LoginPage",
  MAIN_LAYOUT = "MainLayout",
  CHARACTERS_PAGE = "CharactersPage",
  EPISODES_PAGE = "EpisodesPage",
  NOT_FOUND_PAGE = "NotFoundPage",
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.LOGIN_LAYOUT]: "/login",
  [RouteNames.LOGIN_PAGE]: "",
  [RouteNames.MAIN_LAYOUT]: "/",
  [RouteNames.CHARACTERS_PAGE]: "characters",
  [RouteNames.EPISODES_PAGE]: "episodes",
  [RouteNames.NOT_FOUND_PAGE]: "/:pathMatch(.*)*",
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.LoginLayout,
    name: RouteNames.LOGIN_LAYOUT,
    component: LoginLayout,
    children: [
      {
        path: RoutePaths.LoginPage,
        name: RouteNames.LOGIN_PAGE,
        component: () => import("@/pages/login/ui/LoginPage.vue"),
      },
    ],
  },
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
