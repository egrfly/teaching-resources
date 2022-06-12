import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JsLesson2Home from './JsLesson2Home'
import PastaHut from './PastaHut'

const JsLesson2Routes = () => {
  return (
    <Routes>
      <Route index element={<JsLesson2Home />}/>
      <Route path="pasta-hut" element={<PastaHut />} />
    </Routes>
  )
}

export default JsLesson2Routes
