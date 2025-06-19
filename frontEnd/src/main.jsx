import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AskPage from './pages/AskPage'
import SignPage from './pages/SignPage'
import AIPage from './pages/AIPage'
import SupportPage from './pages/SupportPage'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AskPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
