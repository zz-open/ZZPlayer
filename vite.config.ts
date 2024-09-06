import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web-music-player/', // 参考 https://cn.vitejs.dev/guide/static-deploy.html
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag === 'meting-js'
        },
      },
    },
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
})
