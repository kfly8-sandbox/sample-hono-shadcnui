import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import SandboxBlock from '@/blocks/sandbox'

// クライアントサイドでのハイドレーション
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app')
  if (container) {
    if (container.hasChildNodes()) {
      hydrateRoot(container, <SandboxBlock />)
    } else {
      createRoot(container).render(<SandboxBlock />)
    }
  }
})
