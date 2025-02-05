import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { distRootDir, srcRootDir } from './utils';

export default defineConfig({
  plugins: [DefineOptions(), vue()],
  resolve: {
    alias: {
      '@': srcRootDir, // 用@代替src
    },
  },
  build: {
    outDir: distRootDir,
    emptyOutDir: true,
    target: 'modules',
    lib: {
      entry: path.resolve(srcRootDir, 'index.ts'),
      name: 'ElementPlusPlus',
      fileName: (format) => `element-plus-plus.${format}.${format === 'es' ? 'm' : ''}js`,
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
});
