export default {
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "about",
      type: "string",
      title: "About",
    },
    {
      title: "Experience",
      name: "experience",
      type: "array",
      of: [
        {
          type: "object",
          title: "Experience Item",
          fields: [
            {
              name: "role",
              type: "string",
              title: "Role",
            },
            {
              name: "company",
              type: "string",
              title: "Company",
            },
            {
              name: "duration",
              type: "string",
              title: "Duration",
            }
          ]
        }
      ]
    }
  ],
};
