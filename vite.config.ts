import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrHotReload from 'vite-plugin-ssr-hot-reload'

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom'],
  },
  plugins: [ssrHotReload(), cloudflare()]
})
