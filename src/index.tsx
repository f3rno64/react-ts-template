import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import * as C from './components'

import './index.scss'

const rootElement = document.getElementById('root')

if (rootElement === null) {
  throw new Error('Root element not found')
}

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <C.UI />
  </StrictMode>
)
