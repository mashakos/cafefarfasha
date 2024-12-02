
/**
 * @type {import('tinacms').Collection}
 */


import Typesense from 'typesense';


export default {
  name: "drink",
  label: "Drinks",
  path: "app/routes",
  match: {
    include: '**/**/drinks.**',
  },
  format: 'mdx',
  ui: {
    /*
    * index post on creating new post or updating existing post.
    * values sent to /tsindex API endpoint in remix site.
    * indexed post id returned and added as custom field on saving.
    * */
    beforeSubmit: async ({
                           form,
                           values,
                         }) => {
      console.log(`before submit triggered. price is ${values.price} and slug is ${form.id}`);
      let postId = 0;
      let postSlug = "";
      if(form.id === "app/routes/new-post.mdx")
        postSlug = `/drinks/${values?.title
          ?.toLowerCase()
          .replace(/[|&;$%@"<>()+,:]/g, "")
          .replace(/[ŵ]/g, "w")
          .replace(/[û]/g, "u")
          .replace(/[ô]/g, "o")
          .replace(/[î]/g, "i")
          .replace(/[é]/g, "e")
          .replace(/[ê]/g, "e")
          .replace(/[â]/g, "a")
          .replace(/[ŷ]/g, "y")
          .replace(/ /g, '-')}`;
      else
        postSlug = form.id.replace('app/routes/drinks.', '/drinks/').replace(/\.mdx$/, '');

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("banner", values.banner);
      formData.append("abstract", values.abstract);
      formData.append("price", values.price);
      formData.append("slug", postSlug);
      formData.append("collection", "drink");

      try {
        const response = await fetch("/tsindex", {
          method: "POST",
          // Set the FormData instance as the request body
          body: formData,
        });
        const returnedData = await response.json();
        postId = returnedData.id;
        console.log(JSON.stringify(returnedData, null, 2));
      }
      catch (err)
      {
        console.error(err);
      }

      return {
        ...values,
        lastUpdated: new Date().toISOString(),
        postId: postId
      };
    },
    router: ({ document }) => {
      // must remove file extension and prepeneded article.
      return `/drinks/${document._sys.basename.replace('drinks.', '').replace('.mdx', '')}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `drinks.${values?.title
          ?.toLowerCase()
          .replace(/[|&;$%@"<>()+,:]/g, "")
          .replace(/[ŵ]/g, "w")
          .replace(/[û]/g, "u")
          .replace(/[ô]/g, "o")
          .replace(/[î]/g, "i")
          .replace(/[é]/g, "e")
          .replace(/[ê]/g, "e")
          .replace(/[â]/g, "a")
          .replace(/[ŷ]/g, "y")
          .replace(/ /g, '-')}`;
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "banner",
      label: "Banner",
      required: true,
    },
    {
      type: "string",
      name: "abstract",
      label: "Abstract",
      required: true,
      ui: {
        component: "textarea"
      },
    },
    {
      type: "number",
      name: "price",
      label: "Price",
      required: true,
    },
  ],
};