import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HtmlFileCode from './HtmlFileCode'
import JsConsoleCode from './JsConsoleCode'
import JsFileCode from './JsFileCode'
import JsLesson2Home from './JsLesson2Home'
import PastaHut from './PastaHut'

const JsLesson2Routes = () => {
  return (
    <Routes>
      <Route index element={<JsLesson2Home />}/>
      <Route path="pasta-hut" element={<PastaHut />} />
      <Route path="js-console-code" element={<JsConsoleCode />} />
      <Route path="html-file-code" element={<HtmlFileCode />} />
      <Route path="js-file-code" element={<JsFileCode />} />
    </Routes>
  )
}

export default JsLesson2Routes
