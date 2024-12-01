import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';
import client from 'tina/__generated__/client.js';

export async function loader({ request }) {
  const slug = request.url.split('/').at(-1);

  // Tina query, read using useLoaderData in app/layouts/post/fizzy.jsx template
  const { data, query, variables } = await client.queries.post({
    relativePath: "articles." + slug + ".mdx",
  });

  //const module = await import(`../articles.${slug}.mdx`);
  const title = data.post.title;
  const abstract = data.post.abstract;
  const frontmatter = {title, abstract};
  const text = await import(`../articles.${slug}.mdx?raw`);
  const readTime = readingTime(text.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;


  return json({
    ogImage,
    frontmatter: frontmatter,
    timecode: formatTimecode(readTime),
    props: {
      data,
      query,
      variables,
    },
  });
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
