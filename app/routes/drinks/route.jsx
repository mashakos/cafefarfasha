import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Drink, drinkMarkdown } from '~/layouts/drink';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';
import client from 'tina/__generated__/client.js';

export async function loader({ request }) {
  const slug = request.url.split('/').at(-1);
  console.log(slug);

  // Tina query, read using useLoaderData in app/layouts/post/drink.jsx template
  const { data, query, variables } = await client.queries.drink({
    relativePath: "drinks." + slug + ".mdx",
  });
  console.log(data);

  //const module = await import(`../drinks.${slug}.mdx`);
  const title = data.drink.title;
  const abstract = data.drink.abstract;
  const frontmatter = {title, abstract};
  const text = await import(`../drinks.${slug}.mdx?raw`);
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

export default function Drinks() {
  const { timecode } = useLoaderData();

  return (
    <MDXProvider components={drinkMarkdown}>
      <Drink timecode={timecode}>
        <Outlet />
      </Drink>
    </MDXProvider>
  );
}
