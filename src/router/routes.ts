import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

export enum RouteNames {
  MAIN_LAYOUT = "MainLayout",
  HOME_VIEW = "HomeView",
  NOT_FOUND = "NotFound",
  CHARACTER_VIEW = "CharactersView",
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN_LAYOUT]: "/",
  [RouteNames.HOME_VIEW]: "",
  [RouteNames.NOT_FOUND]: "/:pathMatch(.*)*",
  [RouteNames.CHARACTER_VIEW]: "",
};

export const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.MainLayout,
    name: RouteNames.MAIN_LAYOUT,
    component: MainLayout,
    children: [
      {
        path: RoutePaths.HomeView,
        name: RouteNames.HOME_VIEW,
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: RoutePaths.NotFound,
    name: RouteNames.NOT_FOUND,
    component: () => import("@/views/NotFoundView.vue"),
  },
  {
    path: RoutePaths.CharactersView,
    name: RouteNames.CHARACTER_VIEW,
    component: () => import("@/views/CharactersView.vue"),
  },
];
