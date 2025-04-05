import { reactRenderer } from '@hono/react-renderer'

export const renderer = reactRenderer(({ children }) => {
  return (
    <html>
      <head>
        { !!import.meta.env ? (
          <>
            <link href="/src/style.css" rel="stylesheet" />
            <script type="module" src="/src/client.tsx"></script>
          </>
        ) : (
          <>
            <link href="/static/style.css" rel="stylesheet" />
            <script type="module" src="/static/client.js"></script>
          </>
        ) }
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  )
})
