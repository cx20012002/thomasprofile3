export default {
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Small Title",
      name: "smallTitle",
      type: "string",
    },
    {
      title: "Feature Image",
      name: "featureImage",
      type: "image",
    },
    {
      name: "introBlocks",
      title: "Intro Blocks",
      type: "array",
      of: [
        {
          type: "object",
          name: "summaryBlock",
          title: "Summary Block",
          fields: [
            {
              name: "summary",
              title: "Summary",
              type: "text",
            },
          ],
        },
        {
          type: "object",
          name: "infoBlock",
          title: "Info Block",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              description:
                "Label for the info block (e.g., Services, Client, Year)",
            },
            {
              name: "content",
              title: "Content",
              type: "string",
              description: "Content for the info block",
            },
          ],
        },
      ],
      description:
        "Additional information like summary, services, client, year, etc.",
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for accessibility and SEO.",
            },
          ],
        },
      ],
    },
    {
      name: "profileSection",
      title: "Profile Section",
      type: "array",
      of: [
        {
          type: "object",
          name: "profileSection",
          title: "Profile Section",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "summary",
              title: "Summary",
              type: "text",
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            }
          ],
        },
      ],
      description:
        "Additional profile section like about, services, client, year, etc.",
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for accessibility and SEO.",
            },
          ],
        },
      ],
    },
  ],
};
