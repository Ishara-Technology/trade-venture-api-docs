import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Trade Vencher API docs</span>,
  project: {
    link: "https://github.com/shahjalal-bu",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shahjalal-bu",
  footer: {
    // Wrap the text inside a React element to fit the expected type
    component: (
      <span>
        All Rights Reserved @ <a href="https://ishara.tech">Ishara.tech</a>
      </span>
    ),
  },
};

export default config;
