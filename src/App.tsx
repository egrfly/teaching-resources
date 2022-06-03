import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JsRoutes from './pages/js/JsRoutes'
import SqlRoutes from './pages/sql/SqlRoutes'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/js/*" element={<JsRoutes />} />
        <Route path="/sql/*" element={<SqlRoutes />} />
      </Routes>
    </Router>
  )
}

export default App
