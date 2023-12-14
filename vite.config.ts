import pages from '@hono/vite-cloudflare-pages'
import sonik from 'sonik/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: './app/client.ts',
          output: {
            dir: './dist/static',
            entryFileNames: 'client.js'
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
