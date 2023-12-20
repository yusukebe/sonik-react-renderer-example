import { createApp } from 'sonik/server'
import { serveStatic } from 'hono/cloudflare-pages'

export default createApp({
  init: (app) => {
    app.use('/static/*', serveStatic())
  }
})
