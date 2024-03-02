import { defineConfig } from "tinacms";

type BeforeSubmitFunction = (args: {
  values: Record<string, unknown>
  cms: TinaCMS
  form: Form
}) => Promise<void | Record<string, unknown>>

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

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
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        defaultItem: () => {
          return {
            modDatetime: new Date(),
            pubDatetime: new Date(),
             description: 'Description',
            body: 'Description',
          }
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
            type: 'string',
            name: 'author',
            label: 'Author',
          },
          {
            type: "datetime",
            name: "pubDatetime",
            label: "Publish Date",
            required: true,
          },
          { 
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description"
          },
          {
            type: "datetime",
            name: "modDatetime",
            label: "Modification on"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: 'tags'
            }
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            description: 'If this is checked the post will not be published',
          },
          {
            name: 'featured',
            label: 'Featured',
            type: 'boolean',
            description: 'Feature post',
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "src/pages",

        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description"
          },
       
        ],
      },


    ],
  },
});
