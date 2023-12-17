import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.PROD ? (
          <>
            <link href="/static/assets/style.css" rel="stylesheet" />
            <script type="module" src="/static/client.js"></script>
          </>
        ) : (
          <>
            <link href="/app/style.css" rel="stylesheet" />
            <script type="module" src="/app/client.ts"></script>
          </>
        )}
        <title>{title}</title>
      </head>
      <body className="bg-gray-100">
        <div className="m-4">
          <header className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">
              <a href="/" className="text-blue-600 hover:text-blue-800">
                Top
              </a>
            </h1>
          </header>
          {children}
          <footer className="mt-8 py-4 border-t">
            <small className="text-gray-600">© 2023 your name</small>
          </footer>
        </div>
      </body>
    </html>
  )
})
