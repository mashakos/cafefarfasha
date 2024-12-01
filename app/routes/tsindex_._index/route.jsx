import { baseMeta } from '~/utils/meta';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

import Typesense from 'typesense';


export async function action({request}) {

  let returnedData;
  const requestData = await request.formData();
  //form fields
  const title = requestData.get("title");
  const date = new Date(requestData.get("date")).getTime();
  const banner = requestData.get("banner");
  const abstract = requestData.get("abstract");
  const bodydata = requestData.get("body");
  const postSlug = requestData.get("slug");
  let postId = 0;

  let typesenseClient = new Typesense.Client({
    'nodes': [{
      'host': process.env.TYPESENSE_HOST, // For Typesense Cloud use xxx.a1.typesense.net
      'port': process.env.TYPESENSE_PORT,      // For Typesense Cloud use 443
      'protocol': process.env.PUBLIC_TYPESENSE_PROTOCOL  // For Typesense Cloud use https
    }],
    'apiKey': process.env.TYPESENSE_API_KEY,
    'connectionTimeoutSeconds': 2
  });

  {
    // search query based on post slug.
    let searchParameters = {
      'q'         : '*',
      "filter_by": `slug:=${postSlug}`,
    };
    await typesenseClient.collections('post').documents().search(searchParameters).then(function (data) {
      if(data.found !== 0)
      {
        // only one result should be retrieved.
        postId = data.hits[0].document.id;
        console.log(postId);
      }
    });

    // check if post is already indexed and update the post index. If not, create post index and send its id back to post admin logic.
    if(postId !== 0)
    {
      let postDocument = {
        'id': postId,
        'title': title,
        'abstract': abstract,
        'banner': banner,
        'date': date,
        'body': bodydata,
        'slug': postSlug,
      };
      await typesenseClient.collections('post').documents().upsert(
        postDocument,
        {"filter_by": `slug:=${postSlug}`}
      ).then(function (data) {
        returnedData = data;
      });
    }
    else
    {
      let postDocument = {
        'title': title,
        'abstract': abstract,
        'banner': banner,
        'date': date,
        'body': bodydata,
        'slug': postSlug,
      };
      await typesenseClient.collections('post').documents().create(
        postDocument
      ).then(function (data) {
        // get id after indexed post is created
        postId = data.id;
        returnedData = data;
      });
    }
  }

  // return json({ text : 'Fizzy:' + postId + ' Indexed.', data: returnedData });
  return json({ text : 'Fizzy:' + postId + ' Indexed.', id: postId });
}