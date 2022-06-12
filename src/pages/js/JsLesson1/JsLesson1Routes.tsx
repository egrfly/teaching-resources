import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JsLesson1Home from './JsLesson1Home'
import AmonstUs from './AmongstUs'

const JsLesson1Routes = () => {
  return (
    <Routes>
      <Route index element={<JsLesson1Home />}/>
      <Route path="amongst-us" element={<AmonstUs />} />
    </Routes>
  )
}

export default JsLesson1Routes
