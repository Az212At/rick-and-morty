import { defineStore } from "pinia";
import { IPost } from "@/modules/characters-page/types";
import { apiGetPosts } from "@/modules/characters-page/api";

export const usePostStore = defineStore("post-store", {
  state: () => ({
    posts: [] as Array<IPost>,
  }),

  actions: {
    getPosts() {
      return new Promise((resolve, reject) => {
        apiGetPosts()
          .then((response) => {
            this.posts = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
