import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App/>
)
