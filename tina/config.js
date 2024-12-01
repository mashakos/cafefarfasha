import { defineConfig } from "tinacms";
import Drink from "./collections/drink.jsx";
import HotBeverage from "./collections/hotbeverage.jsx";
import Hookah from "./collections/hookah.jsx";
import Fizzy from "./collections/fizzy.jsx";


// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.TINA_GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({

  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "static",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Drink, HotBeverage, Hookah, Fizzy],
  },
});
