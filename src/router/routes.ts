import { RouteRecordRaw } from "vue-router";
import LoginLayout from "@/layouts/LoginLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export enum RouteNames {
  LOGIN_LAYOUT = "LoginLayout",
  LOGIN_VIEW = "LoginView",
  MAIN_LAYOUT = "MainLayout",
  HOME_VIEW = "HomeView",
  CHARACTERS_VIEW = "CharactersView",
  EPISODES_VIEW = "EpisodesView",
  NOT_FOUND = "NotFound",
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.LOGIN_LAYOUT]: "/login",
  [RouteNames.LOGIN_VIEW]: "",
  [RouteNames.MAIN_LAYOUT]: "/",
  [RouteNames.HOME_VIEW]: "",
  [RouteNames.CHARACTERS_VIEW]: "characters",
  [RouteNames.EPISODES_VIEW]: "episodes",
  [RouteNames.NOT_FOUND]: "/:pathMatch(.*)*",
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.LoginLayout,
    name: RouteNames.LOGIN_LAYOUT,
    component: LoginLayout,
    children: [
      {
        path: RoutePaths.LoginView,
        name: RouteNames.LOGIN_VIEW,
        component: () => import("@/views/LoginView.vue"),
      },
    ],
  },
  {
    path: RoutePaths.MainLayout,
    name: RouteNames.MAIN_LAYOUT,
    component: MainLayout,
    children: [
      {
        path: RoutePaths.HomeView,
        name: RouteNames.HOME_VIEW,
        component: () => import("@/views/PostsPage.vue"),
      },
      {
        path: RoutePaths.CharactersView,
        name: RouteNames.CHARACTERS_VIEW,
        component: () => import("@/views/CharactersPage.vue"),
      },
      {
        path: RoutePaths.EpisodesView,
        name: RouteNames.EPISODES_VIEW,
        component: () => import("@/views/EpisodesPage.vue"),
      },
    ],
  },
  {
    path: RoutePaths.NotFound,
    name: RouteNames.NOT_FOUND,
    component: () => import("@/views/NotFoundPage.vue"),
  },
];
