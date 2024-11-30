import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

const isStorybook = process.argv[1]?.includes('storybook');

export default defineConfig({
  define: {'process.env': process.env},
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
  },
  server: {
    port: 7777,
    proxy: {
      '/cms': {
        target: 'http://localhost:7777/admin/index.html',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/cms/, ''),
      },
    },
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remixCloudflareDevProxy(),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/search/route.js', { index: true });
        });
      },
    }),
    jsconfigPaths(),
  ],
});
