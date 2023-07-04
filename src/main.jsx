import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarsProvider } from './context/CarsContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarsProvider>
        <App />
      </CarsProvider>
    </BrowserRouter>
  </React.StrictMode>
)
