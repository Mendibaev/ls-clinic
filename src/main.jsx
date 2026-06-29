import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { loadContent } from './content/store.js'
import './index.css'

function render() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
}

// Подгружаем контент из Sanity (с фолбэком на сид-данные), затем рендерим.
loadContent().finally(render)
