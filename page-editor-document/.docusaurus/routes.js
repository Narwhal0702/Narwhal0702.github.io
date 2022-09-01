import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '175'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c8d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '78b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '820'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '21f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '32c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'fbf'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'eb6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'de2'),
    routes: [
      {
        path: '/docs/api/blocks_api',
        component: ComponentCreator('/docs/api/blocks_api', 'a10'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/hooks',
        component: ComponentCreator('/docs/api/hooks', '498'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/guide/',
        component: ComponentCreator('/docs/guide/', 'cc8'),
        exact: true,
        sidebar: "guide"
      },
      {
        path: '/docs/guide/b_side_editor',
        component: ComponentCreator('/docs/guide/b_side_editor', 'f9a'),
        exact: true,
        sidebar: "guide"
      },
      {
        path: '/docs/guide/c_side_render',
        component: ComponentCreator('/docs/guide/c_side_render', '48a'),
        exact: true,
        sidebar: "guide"
      },
      {
        path: '/docs/guide/page_data_structure',
        component: ComponentCreator('/docs/guide/page_data_structure', 'bdc'),
        exact: true,
        sidebar: "guide"
      },
      {
        path: '/docs/guide/providers',
        component: ComponentCreator('/docs/guide/providers', 'c88'),
        exact: true,
        sidebar: "guide"
      },
      {
        path: '/docs/intro/quick_start',
        component: ComponentCreator('/docs/intro/quick_start', 'bb4'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '07d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
