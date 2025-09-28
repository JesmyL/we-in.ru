import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
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
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      routesDirectory: viteValues.tanstackRoutesDir,
      generatedRouteTree: viteValues.tanstackGenRouteTree,
    }),
    react(),
  ],
});
