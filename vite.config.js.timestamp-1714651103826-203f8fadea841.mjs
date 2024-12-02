// vite.config.js
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "file:///D:/Dev%20Projects/delosian-canary/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///D:/Dev%20Projects/delosian-canary/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///D:/Dev%20Projects/delosian-canary/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///D:/Dev%20Projects/delosian-canary/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///D:/Dev%20Projects/delosian-canary/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///D:/Dev%20Projects/delosian-canary/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///D:/Dev%20Projects/delosian-canary/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///D:/Dev%20Projects/delosian-canary/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///D:/Dev%20Projects/delosian-canary/node_modules/@mapbox/rehype-prism/index.js";
var isStorybook = process.argv[1]?.includes("storybook");
var vite_config_default = defineConfig({
  define: { "process.env": process.env },
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777,
    proxy: {
      "/cms": {
        target: "http://localhost:7777/admin/index.html",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/cms/, "")
      }
    }
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remixCloudflareDevProxy(),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXYgUHJvamVjdHNcXFxcZGVsb3NpYW4tY2FuYXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEZXYgUHJvamVjdHNcXFxcZGVsb3NpYW4tY2FuYXJ5XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EZXYlMjBQcm9qZWN0cy9kZWxvc2lhbi1jYW5hcnkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQge1xyXG4gIHZpdGVQbHVnaW4gYXMgcmVtaXgsXHJcbiAgY2xvdWRmbGFyZURldlByb3h5Vml0ZVBsdWdpbiBhcyByZW1peENsb3VkZmxhcmVEZXZQcm94eSxcclxufSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQganNjb25maWdQYXRocyBmcm9tICd2aXRlLWpzY29uZmlnLXBhdGhzJztcclxuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCc7XHJcbmltcG9ydCByZW1hcmtGcm9udG1hdHRlciBmcm9tICdyZW1hcmstZnJvbnRtYXR0ZXInO1xyXG5pbXBvcnQgcmVtYXJrTWR4RnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLW1keC1mcm9udG1hdHRlcic7XHJcbmltcG9ydCByZWh5cGVJbWdTaXplIGZyb20gJ3JlaHlwZS1pbWctc2l6ZSc7XHJcbmltcG9ydCByZWh5cGVTbHVnIGZyb20gJ3JlaHlwZS1zbHVnJztcclxuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gJ0BtYXBib3gvcmVoeXBlLXByaXNtJztcclxuXHJcbmNvbnN0IGlzU3Rvcnlib29rID0gcHJvY2Vzcy5hcmd2WzFdPy5pbmNsdWRlcygnc3Rvcnlib29rJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGRlZmluZTogeydwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52fSxcclxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJywgJyoqLyouaGRyJywgJyoqLyouZ2xzbCddLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMTAyNCxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogNzc3NyxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgICcvY21zJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6Nzc3Ny9hZG1pbi9pbmRleC5odG1sJyxcclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgc2VjdXJlOiBmYWxzZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvY21zLywgJycpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIG1keCh7XHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtbcmVoeXBlSW1nU2l6ZSwgeyBkaXI6ICdwdWJsaWMnIH1dLCByZWh5cGVTbHVnLCByZWh5cGVQcmlzbV0sXHJcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxyXG4gICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogJ0BtZHgtanMvcmVhY3QnLFxyXG4gICAgfSksXHJcbiAgICByZW1peENsb3VkZmxhcmVEZXZQcm94eSgpLFxyXG4gICAgcmVtaXgoe1xyXG4gICAgICByb3V0ZXMoZGVmaW5lUm91dGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluZVJvdXRlcyhyb3V0ZSA9PiB7XHJcbiAgICAgICAgICByb3V0ZSgnLycsICdyb3V0ZXMvaG9tZS9yb3V0ZS5qcycsIHsgaW5kZXg6IHRydWUgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIGpzY29uZmlnUGF0aHMoKSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UjtBQUFBLEVBQ3JSLGNBQWM7QUFBQSxFQUNkLGdDQUFnQztBQUFBLE9BQzNCO0FBQ1AsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBRXhCLElBQU0sY0FBYyxRQUFRLEtBQUssQ0FBQyxHQUFHLFNBQVMsV0FBVztBQUV6RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRLEVBQUMsZUFBZSxRQUFRLElBQUc7QUFBQSxFQUNuQyxlQUFlLENBQUMsWUFBWSxZQUFZLFdBQVc7QUFBQSxFQUNuRCxPQUFPO0FBQUEsSUFDTCxtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLFlBQVksV0FBVztBQUFBLE1BQzNFLGVBQWUsQ0FBQyxtQkFBbUIsb0JBQW9CO0FBQUEsTUFDdkQsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBLElBQ0Qsd0JBQXdCO0FBQUEsSUFDeEIsTUFBTTtBQUFBLE1BQ0osT0FBTyxjQUFjO0FBQ25CLGVBQU8sYUFBYSxXQUFTO0FBQzNCLGdCQUFNLEtBQUssd0JBQXdCLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFBQSxRQUNwRCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
