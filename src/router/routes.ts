import { RouteRecordRaw } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

export enum RouteNames {
  MAIN_LAYOUT = "MainLayout",
  HOME_VIEW = "HomeView",
  NOT_FOUND = "NotFound",
  COVER_VIEW = "CoverView",
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN_LAYOUT]: "/",
  [RouteNames.HOME_VIEW]: "/home",
  [RouteNames.NOT_FOUND]: "/:pathMatch(.*)*",
  [RouteNames.COVER_VIEW]: "",
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
    path: RoutePaths.CoverView,
    name: RouteNames.COVER_VIEW,
    component: () => import("@/views/CoverView.vue"),
  },
];
