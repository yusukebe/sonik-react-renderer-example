import 'hono'

declare module 'hono' {
  interface ContextRenderer {
    (children: React.ReactElement): Response | Promise<Response>
  }
}

declare module '@hono/react-renderer' {
  interface Props {
    title: string
  }
}
