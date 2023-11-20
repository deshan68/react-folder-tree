export const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "bin",
          children: [
            {
              name: "acorn",
            },
            {
              name: "esbuild",
            },
          ],
        },
      ],
    },
    {
      name: "public",
      children: [
        {
          name: "vite.svg",
        },
        {
          name: "favIcon.ico",
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "assets",
          children: [
            {
              name: "react.svg",
            },
          ],
        },
        {
          name: "App.tsx",
        },
        {
          name: "App.css",
        },
        {
          name: "main.tsx",
        },
        {
          name: "index.css",
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts",
    },
    {
      name: ".gitignore",
    },
    {
      name: "index.html",
    },
    {
      name: "README.md",
    },
    {
      name: "tsconfig.json",
    },
  ],
};
