/// <reference types="vitest" />
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 添加.ts和.tsx扩展名以自动解析
    },
    plugins: [vue(), tsconfigPaths(), ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true // 启用 Less 的 JavaScript 表达式支持
            }
        }
    },
    test: {
        globals: true,
    },
})
