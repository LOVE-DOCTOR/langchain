/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    {
      type: "category",
      label: "Get started",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "get_started" }],
    },
    {
      type: "category",
      label: "Modules",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "modules" }],
    },
    {
      type: "category",
      label: "Use cases",
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "use_cases" }],
    },
    {
      type: "category",
      label: "Ecosystem",
      items: [{ type: "autogenerated", dirName: "ecosystem" }],
    },
    // {
    //   type: "category",
    //   label: "API Reference",
    //   link: {
    //     type: "doc",
    //     id: "api/index",
    //   },
    //   items: [{ type: "autogenerated", dirName: "api" }],
    // },
  ],
};
