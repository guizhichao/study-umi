// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/edz/study/umi-study/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/Loading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list' */'@/pages/list'), loading: LoadingComponent}),
    "exact": true
  },
  {
    "path": "/list",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list' */'@/pages/list'), loading: LoadingComponent}),
    "exact": true
  },
  {
    "path": "/detail",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__detail' */'@/pages/detail'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
