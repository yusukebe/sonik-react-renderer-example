import { createFactory } from 'hono/factory'

type Env = {
  Variables: {
    foo: string
  }
}

export const factory = createFactory<Env>()
export const createHandlers = factory.createHandlers
