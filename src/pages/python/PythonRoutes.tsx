import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PythonHome from './PythonHome'
import PythonLesson1 from './PythonLesson1'
import PythonLesson2 from './PythonLesson2'
import PythonLesson3 from './PythonLesson3'
import PythonLesson4 from './PythonLesson4'
import PythonLesson5 from './PythonLesson5'
import PythonLesson6 from './PythonLesson6'

const PythonRoutes = () => {
  return (
    <Routes>
      <Route index element={<PythonHome />}/>
      <Route path="lesson-1" element={<PythonLesson1 />} />
      <Route path="lesson-2" element={<PythonLesson2 />} />
      <Route path="lesson-3" element={<PythonLesson3 />} />
      <Route path="lesson-4" element={<PythonLesson4 />} />
      <Route path="lesson-5" element={<PythonLesson5 />} />
      <Route path="lesson-6" element={<PythonLesson6 />} />
    </Routes>
  )
}

export default PythonRoutes
