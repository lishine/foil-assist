import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Foil Assist</span>,
  project: {
    link: "https://github.com/lishine/foil-assist",
  },
  docsRepositoryBase: "https://github.com/lishine/foil-assist/tree/main",
  footer: {
    text: "Welcome to the foil assist",
  },
  useNextSeoProps: () => {
    return {};
  },
};

export default config;
