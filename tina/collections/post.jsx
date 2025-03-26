
/**
 * @type {import('tinacms').Collection}
 */


import Typesense from 'typesense';


export default {
  name: "post",
  label: "Posts",
  path: "app/routes",
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
      console.log(`before submit triggered. date is ${values.date} and slug is ${form.id}`);
      let postId = 0;
      let bodydata = "";
      let postSlug = "";
      if(form.id === "app/routes/new-post.mdx")
        postSlug = `/articles/${values?.title
          ?.toLowerCase()
          .replace(/([^a-z0-9 -])/g, "")
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .replace(/ /g, '-')}`;
      else
        postSlug = form.id.replace('app/routes/articles.', '/articles/').replace(/\.mdx$/, '');
      /*
      *
      *  body object parser
      *  parses body object, extracts text from HTML elements
      *  supported elements:
      *  H1,H2,H3,P,BLOCKQUOTE,UL,LI
      *
      */
      Object.entries(values.body.children).forEach(([k, v]) => {
          Object.entries(v).forEach(([k, v]) => {
            if(k === "children")
            {
              // Check for unordered list
              if(v[0].type === "li")
              {
                Object.entries(v).forEach(([k, v]) => {
                  Object.entries(v.children).forEach(([k, v]) => {
                    // if list item has sublist, loop through it
                    if(v.type === "ul" || v.type === "ol")
                    {
                      Object.entries(v.children).forEach(([k, v]) => {
                        bodydata = bodydata + '  - ' + v.children[0].children[0].text+ '\n';
                      });
                    }
                    else
                      bodydata = bodydata + ' * ' + v.children[0].text+ '\n';
                  });
                });
              }
              else
              // Regular text
              if(v[0].text !== undefined)
              {
                bodydata = bodydata + v[0].text + '\n';
              }
            }
          });
      });
      // console.log(bodydata);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("date", values.date);
      formData.append("banner", values.banner);
      formData.append("abstract", values.abstract);
      formData.append("body", bodydata);
      formData.append("slug", postSlug);

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
      return `/articles/${document._sys.basename.replace('articles.', '').replace('.mdx', '')}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `articles.${values?.title
          ?.toLowerCase()
          .replace(/([^a-z0-9 -])/g, "")
          .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
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
      type: "string",
      name: "abstract",
      label: "Abstract",
      required: true,
      ui: {
        component: "textarea"
      },
    },
    {
      type: "image",
      name: "banner",
      label: "Banner",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        {
          name: "YoutubeEmbed",
          label: "Embed Youtube",
          fields: [
            {
              name: "url",
              label: "Link URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};