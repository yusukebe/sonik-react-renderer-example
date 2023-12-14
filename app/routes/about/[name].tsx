import { factory } from '../../factory'

export default factory.createHandlers((c) => {
  const name = c.req.param('name')
  return c.render(<h2>It's {name}!</h2>)
})
