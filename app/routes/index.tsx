import { createHandlers } from '../factory'
import Counter from '../islands/counter'

export default createHandlers((c) => {
  return c.render(
    <div>
      <h2 className="text-3xl font-bold text-gray-700">
        Hello
        <a href="/about/me" className="text-blue-500 hover:text-blue-700 ml-1">
          me
        </a>
        !
      </h2>
      <div className="mt-4">
        <Counter />
      </div>
    </div>
  )
})
