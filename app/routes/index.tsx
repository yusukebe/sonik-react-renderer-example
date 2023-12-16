import { createHandlers } from '../factory'
import Counter from '../islands/counter'

export default createHandlers((c) => {
  return c.render(
    <div>
      <h2>
        Hello <a href="/about/me">me</a>!
      </h2>
      <Counter />
    </div>
  )
})
