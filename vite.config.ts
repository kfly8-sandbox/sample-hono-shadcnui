import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrHotReload from 'vite-plugin-ssr-hot-reload'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom'],
  },
  plugins: [ssrHotReload(), cloudflare(), tailwindcss()],
})
