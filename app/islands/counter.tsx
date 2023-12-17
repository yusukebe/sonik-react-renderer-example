import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <div>
      <p className="text-lg text-gray-600">
        Count: <span className="font-semibold">{count}</span>
      </p>
      <button onClick={increment} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Increment
      </button>
    </div>
  )
}
