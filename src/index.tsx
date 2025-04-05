import { Hono } from 'hono'
import { renderer } from './renderer'
import SandoBlock from "@/blocks/sandbox"

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      <SandoBlock />
    </>
  )
})

export default app
