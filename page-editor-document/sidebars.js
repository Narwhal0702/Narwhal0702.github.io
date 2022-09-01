/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  docs: [
    {
      type: "autogenerated",
      dirName: "intro",
    },
  ],
  // docs: ["introduction"],
  api: [
    // "api/test",
    // "tutorial-basics/congratulations",
    {
      type: "autogenerated",
      dirName: "api",
    },
  ],
  guide: [
    // "api/test",
    // "tutorial-basics/congratulations",
    {
      type: "autogenerated",
      dirName: "guide",
    },
  ],
};

module.exports = sidebars;
