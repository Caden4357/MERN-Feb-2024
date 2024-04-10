import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoReducerProvider } from './context/TodoReducerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoReducerProvider>
      <App />
    </TodoReducerProvider>
  </React.StrictMode>,
)
