import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'eb6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '654'),
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
        path: '/docs/guide/drag_document',
        component: ComponentCreator('/docs/guide/drag_document', '106'),
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
