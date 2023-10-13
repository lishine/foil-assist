import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Comments } from "components/comments";

const config: DocsThemeConfig = {
  main: ({ children }) => {
    return (
      <>
        {children}
        <Comments />
      </>
    );
  },
  logo: <span>Foil Assist</span>,
  project: {
    link: "https://github.com/lishine/foil-assist",
  },
  docsRepositoryBase: "https://github.com/lishine/foil-assist/tree/main",
  footer: {
    text: "Welcome to the foil assist",
  },
  useNextSeoProps: () => {
    return {
      description: "aaaaa",
    };
  },
};

export default config;
