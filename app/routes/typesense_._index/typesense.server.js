
export async function indexDrinks() {
  const modules = import.meta.glob('../drinks.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: post.frontmatter.title,
        abstract: post.frontmatter.abstract,
        banner: post.frontmatter.banner,
        price: post.frontmatter.price,
        slug: `/drinks/${slug}`,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.price, 'desc');
}

export async function indexHotBeverages() {
  const modules = import.meta.glob('../hotbeverages.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: post.frontmatter.title,
        abstract: post.frontmatter.abstract,
        banner: post.frontmatter.banner,
        price: post.frontmatter.price,
        slug: `/hotbeverages/${slug}`,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.price, 'desc');
}

export async function indexHookahs() {
  const modules = import.meta.glob('../hookahs.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: post.frontmatter.title,
        abstract: post.frontmatter.abstract,
        banner: post.frontmatter.banner,
        price: post.frontmatter.price,
        slug: `/hookahs/${slug}`,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.price, 'desc');
}

export async function indexFizzy() {
  const modules = import.meta.glob('../fizzy.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: post.frontmatter.title,
        abstract: post.frontmatter.abstract,
        banner: post.frontmatter.banner,
        price: post.frontmatter.price,
        slug: `/fizzy/${slug}`,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.price, 'desc');
}


export async function indexDesserts() {
  const modules = import.meta.glob('../desserts.*.mdx', { eager: true });
  const build = await import('virtual:remix/server-build');

  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post]) => {
      let id = file.replace('../', 'routes/').replace(/\.mdx$/, '');
      let slug = build.routes[id].path;
      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: post.frontmatter.title,
        abstract: post.frontmatter.abstract,
        banner: post.frontmatter.banner,
        price: post.frontmatter.price,
        slug: `/desserts/${slug}`,
        frontmatter: post.frontmatter,
      };
    })
  );

  return sortBy(posts, post => post.frontmatter.price, 'desc');
}


function sortBy(arr, key, dir = 'asc') {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === 'asc' ? res : -res;
  });
}

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export async function indexProjects() {
  const modules = import.meta.glob('../projects.*/route.js', { eager: true });
  const build = await import('virtual:remix/server-build');

  const projects = await Promise.all(
    Object.entries(modules).map(async ([file, project]) => {
      let id = file.replace('../', 'routes/').replace(/\/route.js$/, '');
      let slug = "/" + build.routes[id].path;
      let title = "";
      let description = "";
      let bodytext = "";
      let roles = "";

      const bodyroot = Object.entries(project.default());
      for (let [key, children] of Object.entries(bodyroot))
      {
        if( children[0] === 'props')
        {
          // title
          title = (JSON.stringify(children[1].children[0].props.children[1].props.title)).replace(/^"(.*)"$/, '$1');
          // description
          description = (JSON.stringify(children[1].children[0].props.children[1].props.description)).replace(/^"(.*)"$/, '$1');
          // body text
          bodytext = (JSON.stringify(children[1].children[0].props.children[1].props.bodytext)).replace(/^"(.*)"$/, '$1');
          // roles
          roles = (JSON.stringify(children[1].children[0].props.children[1].props.roles.join(", ")));
        }
      }



      if (slug === undefined) throw new Error(`No route for ${id}`);

      return {
        title: title,
        description: description,
        bodytext: bodytext,
        roles: roles,
        slug: slug,
      };
    })
  );

  return projects;
}
