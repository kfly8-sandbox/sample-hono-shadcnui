import { reactRenderer } from '@hono/react-renderer'

export const renderer = reactRenderer(({ children }) => {
  return (
    <html>
      <head>
        <link href="/src/index.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
