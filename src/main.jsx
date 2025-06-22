import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@carton-org/react-neumorphism'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider mode="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
