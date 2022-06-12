import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JsHome from './JsHome'
import JsLesson1Routes from './JsLesson1/JsLesson1Routes'
import JsLesson2Routes from './JsLesson2/JsLesson2Routes'

const JsRoutes = () => {
  return (
    <Routes>
      <Route index element={<JsHome />}/>
      <Route path="lesson-1/*" element={<JsLesson1Routes />} />
      <Route path="lesson-2/*" element={<JsLesson2Routes />} />
    </Routes>
  )
}

export default JsRoutes
