import { createHandlers } from '../../factory'

export default createHandlers((c) => {
  const name = c.req.param('name')
  return c.render(<h2>It's {name}!</h2>)
})
