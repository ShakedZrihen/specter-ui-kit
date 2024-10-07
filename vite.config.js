import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // for generating .d.ts files

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'specter-ui-kit',
      fileName: 'index',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [dts({
    tsconfigPath: './tsconfig.json', // Point to your tsconfig
    outputDir: 'dist',
    insertTypesEntry: true // Ensure types are included in package.json
  })]
});