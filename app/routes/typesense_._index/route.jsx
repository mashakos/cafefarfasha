import { baseMeta } from '~/utils/meta';
import { indexDrinks, indexHotBeverages, indexHookahs, indexFizzy, indexDesserts } from './typesense.server.js';
import { json } from '@remix-run/cloudflare';
import Typesense from 'typesense';

export async function loader() {


  //typesense test

  let typesenseClient = new Typesense.Client({
    'nodes': [{
      'host': process.env.TYPESENSE_HOST, // For Typesense Cloud use xxx.a1.typesense.net
      'port': process.env.TYPESENSE_PORT,      // For Typesense Cloud use 443
      'protocol': process.env.PUBLIC_TYPESENSE_PROTOCOL  // For Typesense Cloud use https
    }],
    'apiKey': process.env.TYPESENSE_API_KEY,
    'connectionTimeoutSeconds': 2
  });


  // drink schema
  try {
    await typesenseClient.collections('drink').retrieve();
    console.log('Found existing collection of drink');

    console.log('Deleting collection');
    await typesenseClient.collections('drink').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let drinkSchema = {
      'name': 'drink',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'price', 'type': 'int32' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(drinkSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedDrinks = await indexDrinks();
  let drinkData = [];

  indexedDrinks.map(function(indexedDrink){

    drinkData.push({
      title: indexedDrink.title,
      abstract: indexedDrink.abstract,
      banner: indexedDrink.banner,
      price: indexedDrink.price,
      slug: indexedDrink.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("drink")
      .documents()
      .import(drinkData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }


// hotbeverage schema
  try {
    await typesenseClient.collections('hotbeverage').retrieve();
    console.log('Found existing collection of hotbeverage');

    console.log('Deleting collection');
    await typesenseClient.collections('hotbeverage').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let hotbeverageSchema = {
      'name': 'hotbeverage',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'price', 'type': 'int32' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(hotbeverageSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedHotBeverages = await indexHotBeverages();
  let hotbeverageData = [];

  indexedHotBeverages.map(function(indexedHotBeverage){

    hotbeverageData.push({
      title: indexedHotBeverage.title,
      abstract: indexedHotBeverage.abstract,
      banner: indexedHotBeverage.banner,
      price: indexedHotBeverage.price,
      slug: indexedHotBeverage.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("hotbeverage")
      .documents()
      .import(hotbeverageData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }


// hookah schema
  try {
    await typesenseClient.collections('hookah').retrieve();
    console.log('Found existing collection of hookah');

    console.log('Deleting collection');
    await typesenseClient.collections('hookah').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let hookahSchema = {
      'name': 'hookah',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'price', 'type': 'int32' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(hookahSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedHookahs = await indexHookahs();
  let hookahData = [];

  indexedHookahs.map(function(indexedHookah){

    hookahData.push({
      title: indexedHookah.title,
      abstract: indexedHookah.abstract,
      banner: indexedHookah.banner,
      price: indexedHookah.price,
      slug: indexedHookah.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("hookah")
      .documents()
      .import(hookahData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }


// fizzy schema
  try {
    await typesenseClient.collections('fizzy').retrieve();
    console.log('Found existing collection of fizzy');

    console.log('Deleting collection');
    await typesenseClient.collections('fizzy').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let fizzySchema = {
      'name': 'fizzy',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'price', 'type': 'int32' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(fizzySchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedFizzys = await indexFizzy();
  let fizzyData = [];

  indexedFizzys.map(function(indexedFizzy){

    fizzyData.push({
      title: indexedFizzy.title,
      abstract: indexedFizzy.abstract,
      banner: indexedFizzy.banner,
      price: indexedFizzy.price,
      slug: indexedFizzy.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("fizzy")
      .documents()
      .import(fizzyData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }


// dessert schema
  try {
    await typesenseClient.collections('dessert').retrieve();
    console.log('Found existing collection of dessert');

    console.log('Deleting collection');
    await typesenseClient.collections('dessert').delete();
  } catch (err) {
    console.error(err);
  }


  {
    let dessertSchema = {
      'name': 'dessert',
      'fields': [
        {'name': 'title', 'type': 'string' },
        {'name': 'abstract', 'type': 'string' },
        {'name': 'banner', 'type': 'image' },
        {'name': 'price', 'type': 'int32' },
        {'name': 'slug', 'type': 'string' },
      ],
    };

    typesenseClient.collections().create(dessertSchema)
      .then(function (data) {
        console.log(data);
      });
  }


  const indexedDesserts = await indexDesserts();
  let dessertData = [];

  indexedDesserts.map(function(indexedDessert){

    dessertData.push({
      title: indexedDessert.title,
      abstract: indexedDessert.abstract,
      banner: indexedDessert.banner,
      price: indexedDessert.price,
      slug: indexedDessert.slug,
    });

  });

  try {
    const returnData = await typesenseClient
      .collections("dessert")
      .documents()
      .import(dessertData, {action: 'create'});

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }



  /*
    // projects schema

    try {
      await typesenseClient.collections('project').retrieve();
      console.log('Found existing collection of project');

      console.log('Deleting collection');
      await typesenseClient.collections('project').delete();
    } catch (err) {
      console.error(err);
    }


    {
      let projectSchema = {
        'name': 'project',
        'fields': [
          {'name': 'title', 'type': 'string' },
          {'name': 'description', 'type': 'string' },
          {'name': 'body', 'type': 'string' },
          {'name': 'roles', 'type': 'string' },
          {'name': 'slug', 'type': 'string' },
        ],
      };

      typesenseClient.collections().create(projectSchema)
        .then(function (data) {
          console.log(data);
        });
    }


    const indexedProjects = await indexProjects();
    let projectData = [];

    indexedProjects.map(function(indexedProject){
      projectData.push({
        title: indexedProject.title,
        description: indexedProject.description,
        body: indexedProject.bodytext,
        roles: indexedProject.roles,
        slug: indexedProject.slug,
      });
    });

    //console.log(JSON.stringify(projectData));

    try {
      const returnData = await typesenseClient
        .collections("project")
        .documents()
        .import(projectData, {action: 'create'});

      console.log('Return data: ', returnData);
    } catch (err) {
      console.error(err);
    }
  */


  // end of typesense test

  return json({ text : 'Drinks, Hot Beveragse, Fizzy, Dessert Indexed.' });
}

export function meta() {
  return baseMeta({
    title: 'Fizzy Index',
    description:
      'Typesense index.',
  });
}
