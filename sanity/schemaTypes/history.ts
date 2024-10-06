export default {
  name: "history",
  type: "document",
  title: "History",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Experience",
      name: "experience",
      type: "array",
      of: [
        {
          type: "object",
          title: "Awards",
          fields: [
            {
              name: "first",
              type: "string",
              title: "First",
            },
            {
              name: "second",
              type: "string",
              title: "Second",
            },
            {
              name: "third",
              type: "string",
              title: "Third",
            },
            {
              name: "link",
              type: "string",
              title: "Link",
            }
          ]
        }
      ]
    }
  ],
};
