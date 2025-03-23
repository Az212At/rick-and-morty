// vite.config.ts
import { defineConfig } from "file:///C:/azat/projects/project-rick-and-morty/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/azat/projects/project-rick-and-morty/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslintPlugin from "file:///C:/azat/projects/project-rick-and-morty/node_modules/vite-plugin-eslint/dist/index.mjs";
import path, { resolve } from "path";
import tsconfigPaths from "file:///C:/azat/projects/project-rick-and-morty/node_modules/vite-tsconfig-paths/dist/index.mjs";
import VueDevTools from "file:///C:/azat/projects/project-rick-and-morty/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "C:\\azat\\projects\\project-rick-and-morty";
var vite_config_default = defineConfig({
  test: {
    globals: true,
    environment: "jsdom"
  },
  plugins: [
    vue(),
    eslintPlugin(),
    tsconfigPaths(),
    VueDevTools({ componentInspector: false })
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    },
    extensions: [".ts", ".js", ".vue"]
  },
  build: {
    outDir: path.join(__vite_injected_original_dirname, "dist"),
    rollupOptions: {
      input: resolve(__vite_injected_original_dirname, "index.html")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/scss/variables.scss"; @import "src/scss/mixins.scss";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxhemF0XFxcXHByb2plY3RzXFxcXHByb2plY3Qtcmljay1hbmQtbW9ydHlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXGF6YXRcXFxccHJvamVjdHNcXFxccHJvamVjdC1yaWNrLWFuZC1tb3J0eVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovYXphdC9wcm9qZWN0cy9wcm9qZWN0LXJpY2stYW5kLW1vcnR5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjtcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGVzbGludFBsdWdpbigpLFxuICAgIHRzY29uZmlnUGF0aHMoKSxcbiAgICBWdWVEZXZUb29scyh7IGNvbXBvbmVudEluc3BlY3RvcjogZmFsc2UgfSksXG4gIF0sXG5cbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODA4MCxcbiAgfSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICB9LFxuICAgIGV4dGVuc2lvbnM6IFtcIi50c1wiLCBcIi5qc1wiLCBcIi52dWVcIl0sXG4gIH0sXG5cbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IHBhdGguam9pbihfX2Rpcm5hbWUsIFwiZGlzdFwiKSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXguaHRtbFwiKSxcbiAgICB9LFxuICB9LFxuXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6XG4gICAgICAgICAgJ0BpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiOyBAaW1wb3J0IFwic3JjL3Njc3MvbWl4aW5zLnNjc3NcIjsnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sUUFBUSxlQUFlO0FBQzlCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8saUJBQWlCO0FBUHhCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxZQUFZLEVBQUUsb0JBQW9CLE1BQU0sQ0FBQztBQUFBLEVBQzNDO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxPQUFPLE1BQU07QUFBQSxFQUNuQztBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUSxLQUFLLEtBQUssa0NBQVcsTUFBTTtBQUFBLElBQ25DLGVBQWU7QUFBQSxNQUNiLE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFDRTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
