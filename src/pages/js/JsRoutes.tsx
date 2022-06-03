import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JsIndex from './JsIndex'
import JsLesson1 from './JsLesson1'
import JsLesson2 from './JsLesson2'

const JsRoutes = () => {
  return (
    <Routes>
      <Route index element={<JsIndex />}/>
      <Route path="lesson-1" element={<JsLesson1 />} />
      <Route path="lesson-2" element={<JsLesson2 />} />
    </Routes>
  )
}

export default JsRoutes
