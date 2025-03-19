import Typesense from "typesense";
import { useRef } from 'react';
import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = () =>
  // @ts-expect-error: when import gives {__esModule: true, default: ƒ}, has something todo with TypesenseInstantsearchAdapter's UMD module target
  new TypesenseInstantsearchAdapter({
    server: {
      apiKey: process.env.PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY,
      nodes: [
        {
          host: process.env.TYPESENSE_HOST || 'localhost',
          port: parseInt(process.env.TYPESENSE_PORT || '8108'),
          protocol: process.env.PUBLIC_TYPESENSE_PROTOCOL || 'http',
        },
      ],
    },
    collectionSpecificSearchParameters: {
      dessert: {
        query_by: 'title, abstract',
        sort_by: 'price: desc',
      },
      fizzy: {
        query_by: 'title, abstract',
        sort_by: 'price: desc',
      },
      drink: {
        query_by: 'title, abstract',
        sort_by: 'price: desc',
      },
      hotbeverage: {
        query_by: 'title, abstract',
        sort_by: 'price: desc',
      },
      hookah: {
        query_by: 'title, abstract',
        sort_by: 'price: desc',
      },
    },
    //   additionalSearchParameters: {
    //   query_by: 'title, abstract, body',
    //   num_typos: 0,
    // },
  });