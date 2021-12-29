/*
 * @Descripttion: 
 * @Author: cross.Carol
 * @Date: 2021-12-15 10:06:07
 * @LastEditors: cross.Carol
 * @LastEditTime: 2021-12-29 14:26:01
 */
import { defineConfig } from 'umi';
import { IConfig } from '@umijs/types';
import assert from 'assert';

if (process.env.NODE_ENV === 'development') {
  assert(true, 'foo is not equal to bar');
  console.log('foo is not equal to bar');
  // process.exit(1)
}

export default defineConfig({
  // layout: {},
  alias: {},
  base: '/',
  dynamicImport: {
    loading: '@/Loading'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  webpack5: {},
  mfsu: {},
  routes: [
    { path: '/', component: '@/pages/list' },
    { path: '/list', component: '@/pages/list' },
    { path: '/detail', component: '@/pages/detail' },
  ],
  chainWebpack: ((memo, { env, webpack, createCSSRule }) => {
    assert(env, 'success');
  }),
  /** 比如做了 vendors 依赖提取之后，会需要在 umi.js 之前加载 vendors.js。 */
  chunks: ['vendors', 'umi'],
  /** css打包 */
  cssLoader: {

  },
  /** 用于提供给代码中可用的变量 */
  define: {

  },
  /** 外链 */
  externals: {
    react: 'window.React',
  },
  /** 设置哪些模块可以不被打包，通过 <script> 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用 */
  scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
} as IConfig);