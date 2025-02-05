import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { distRootDir, srcRootDir, getAllDependencies } from './utils';

export default defineConfig({
  plugins: [DefineOptions(), vue()],
  resolve: {
    alias: {
      '@': srcRootDir, // 用@代替src
    },
  },
  build: {
    emptyOutDir: false,
    target: 'modules',
    lib: {
      entry: path.resolve(srcRootDir, 'index.ts'),
      name: 'ElementPlusPlus',
      fileName: (format) => `element-plus-plus.${format}.${format === 'es' ? 'm' : ''}js`,
    },
    rollupOptions: {
      external: getAllDependencies(),
      input: [path.resolve(srcRootDir, 'index.ts')],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          dir: path.resolve(distRootDir, 'es'),
          preserveModulesRoot: srcRootDir,
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: path.resolve(distRootDir, 'lib'),
          preserveModulesRoot: srcRootDir,
        },
      ],
    },
  },
});
