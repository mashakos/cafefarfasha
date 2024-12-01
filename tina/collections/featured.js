/**
 * @type {import('tinacms').Collection}
 */
export default {
  name: "featured",
  label: "Featured Posts",
  path: "app/routes/featured",
  format: 'md',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
    // itemProps: (item) => {
    //   return { label: item.collections.label}
    // },
  },
  fields: [
    {
      type: "reference",
      name: "post",
      label: "Featured Fizzy",
      collections: ['post'],
      required: true,
    },
  ],
};