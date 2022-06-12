import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SqlHome from './SqlHome'
import SqlLesson1 from './SqlLesson1'
import SqlLesson2 from './SqlLesson2'
import SqlLesson3 from './SqlLesson3'
import SqlLesson4 from './SqlLesson4'
import SqlLesson5 from './SqlLesson5'
import SqlLesson6 from './SqlLesson6'

const SqlRoutes = () => {
  return (
    <Routes>
      <Route index element={<SqlHome />}/>
      <Route path="lesson-1" element={<SqlLesson1 />} />
      <Route path="lesson-2" element={<SqlLesson2 />} />
      <Route path="lesson-3" element={<SqlLesson3 />} />
      <Route path="lesson-4" element={<SqlLesson4 />} />
      <Route path="lesson-5" element={<SqlLesson5 />} />
      <Route path="lesson-6" element={<SqlLesson6 />} />
    </Routes>
  )
}

export default SqlRoutes
