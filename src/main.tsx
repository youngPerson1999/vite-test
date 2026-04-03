import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoPage from './practice/01/page.tsx'
import ComponentPage from './practice/02/page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/practice/01" element={<TodoPage />} />
        <Route path="/practice/02" element={<ComponentPage />} />
        <Route path="/practice/03" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
