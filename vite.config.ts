import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import VueMarkdown from "vite-plugin-vue-markdown"
import { prismjsPlugin } from 'vite-plugin-prismjs'
/*  */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }), VueMarkdown(), prismjsPlugin({
    // languages: ['json'],
     languages: 'all',
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/assets/var.scss";'
      }
    }
  }
})
