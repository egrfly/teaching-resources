import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JsLesson1Home from './JsLesson1Home'
import AmongstUs from './AmongstUs'
import JsConsoleCode from './JsConsoleCode'

const JsLesson1Routes = () => {
  return (
    <Routes>
      <Route index element={<JsLesson1Home />}/>
      <Route path="amongst-us" element={<AmongstUs />} />
      <Route path="js-console-code" element={<JsConsoleCode />} />
    </Routes>
  )
}

export default JsLesson1Routes
