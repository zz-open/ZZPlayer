import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 参考 https://cn.vitejs.dev/guide/static-deploy.html
  // 采用gh-pages分支部署时候，建议设置成./，不需要关心前缀
  base: './',
  plugins: [vue({
    template: {
      compilerOptions: {
        // isCustomElement: (tag) => {
        //   return tag === 'meting-js'
        // },
      },
    },
  })],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
})
