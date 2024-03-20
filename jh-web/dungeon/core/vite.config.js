import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const modName='core-mod'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: modName,
      fileName: (format) => `${modName}.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理依赖
      external: ['vue'],
      output: {
        // 在 UMD 和 IIFE 格式下为模块提供命名空间
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
