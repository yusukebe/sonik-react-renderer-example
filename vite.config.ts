import pages from '@hono/vite-cloudflare-pages'
import sonik from 'sonik/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/client.ts', '/app/style.css'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: `static/assets/[name].[ext]`
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        sonik(),
        pages({
          entry: './app/server.ts'
        })
      ],
      build: {
        rollupOptions: {
          output: {
            dir: './dist',
            entryFileNames: '_worker.js'
          }
        }
      }
    }
  }
})
