import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

export enum RouteNames {
  MAIN_LAYOUT = "MainLayout",
  HOME_VIEW = "HomeView",
  NOT_FOUND = "NotFound",
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN_LAYOUT]: "/",
  [RouteNames.HOME_VIEW]: "",
  [RouteNames.NOT_FOUND]: "/:pathMatch(.*)*",
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
];
