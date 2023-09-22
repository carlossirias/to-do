import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToDoProvider } from './context/ToDo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </React.StrictMode>,
)
