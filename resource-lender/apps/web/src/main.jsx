import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootEl = document.getElementById('root')
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  // Fallback: mount to body if #root not present
  const fallback = document.createElement('div')
  document.body.appendChild(fallback)
  createRoot(fallback).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
