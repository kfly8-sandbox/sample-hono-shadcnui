import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrHotReload from 'vite-plugin-ssr-hot-reload'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [ tailwindcss() ],
      build: {
        rollupOptions: {
          input: {
            style: "./src/index.css",
          },
          output: {
            dir: "./dist",
            assetFileNames: "static/[name].[ext]",
          },
        },
        copyPublicDir: false,
        minify: true,
      }
    }
  }
  else {
    return {
      ssr: {
        external: ['react', 'react-dom'],
      },
      plugins: [ssrHotReload(), cloudflare(), tailwindcss()],
    }
  }
})
