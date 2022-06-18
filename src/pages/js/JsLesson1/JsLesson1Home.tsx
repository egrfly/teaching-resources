import React from 'react'
import ResourceCollection from '../../../components/ResourceCollection'
import { jsLesson1Resources } from '../../../data/resourceManagement'

const JsLesson1Home = () => {
  return (
    <ResourceCollection title="JS Lesson 1" resources={jsLesson1Resources} />
  )
}

export default JsLesson1Home
