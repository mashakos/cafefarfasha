
/**
 * @type {import('tinacms').Collection}
 */


import Typesense from 'typesense';


export default {
  name: "hotbeverage",
  label: "Hot Beverages",
  path: "app/routes",
  match: {
    include: '**/**/hotbeverages.**',
  },
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      // must remove file extension and prepeneded article.
      return `/hotbeverages/${document._sys.basename.replace('hotbeverages.', '').replace('.mdx', '')}`;
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
        return `hotbeverages.${values?.title
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