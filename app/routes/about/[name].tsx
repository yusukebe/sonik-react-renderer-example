import { createHandlers } from '../../factory'

export default createHandlers((c) => {
  const name = c.req.param('name')
  return c.render(<h2 className="text-3xl font-bold text-gray-700">It's {name}</h2>)
})
