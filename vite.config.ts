import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
  ],
  esbuild: {
    loader: 'tsx',
    include: [
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'node_modules/**/*.jsx',
      'node_modules/**/*.tsx',
      'src/**/*.js',
      'node_modules/**/*.js',
      '.storybook/**/*.tsx',
    ],
    exclude: ['coverage'],
  },
  build: {
    minify: false,
    sourcemap: 'inline',
    lib: {
      entry: 'src/index.ts',
      name: 'specter-ui-kit',
      fileName(format, entryName) {
        return format === 'es'
          ? `${entryName}.${format}.js`
          : `${entryName}.js`;
      },
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist',
      },
      external: ['react', 'react-dom'],
    },
  },
});
