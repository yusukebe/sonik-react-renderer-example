import { createApp } from 'sonik/server'
import { serveStatic } from 'hono/cloudflare-pages'

const app = createApp()
app.use('/static/*', serveStatic())

export default app
