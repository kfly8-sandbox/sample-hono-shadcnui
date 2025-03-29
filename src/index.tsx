import { Hono } from 'hono'
import { renderer } from './renderer'
import { Button } from "@/components/ui/button"

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      <h1 className="text-3xl font-bold underline">Hello!</h1>
      <Button variant="secondary">Click me</Button>
    </>
  )
})

export default app
