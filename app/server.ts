import { createApp } from 'sonik/server'
import { serveStatic } from 'hono/cloudflare-pages'
import { Hono } from 'hono'

const app = new Hono()
app.use('/static/*', serveStatic())

export default createApp({
  app
})
