import { tanstackRouter } from '@tanstack/router-plugin/vite';
import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import * as tsconf from './tsconfig.json';
import * as viteValues from './vite.config.values.json';

const tsConfig = { ...tsconf };

const alias = {};

Object.entries(tsConfig.compilerOptions.paths).forEach(([aliasKey, [path]]) => {
  alias[aliasKey.slice(0, -2)] = path.slice(1, -2);
});

export default defineConfig({
  resolve: { alias },
  plugins: [
    devtools(),
    tanstackRouter({
      target: 'solid',
      routesDirectory: viteValues.tanstackRoutesDir,
      generatedRouteTree: viteValues.tanstackGenRouteTree,
    }),
    solid(),
  ],
});
