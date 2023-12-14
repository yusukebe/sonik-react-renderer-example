import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/static/style.css" rel="stylesheet" />
        {import.meta.env.PROD ? (
          <script type="module" src="/static/client.js"></script>
        ) : (
          <script type="module" src="/app/client.ts"></script>
        )}
        <title>{title}</title>
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1>
              <a href="/">Top</a>
            </h1>
          </header>
          {children}
          <footer style={{ marginTop: '2rem' }}>
            <small>© 2023 your name</small>
          </footer>
        </div>
      </body>
    </html>
  )
})
