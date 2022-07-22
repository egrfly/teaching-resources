import React from 'react'
import ResourceCollection from '../../components/ResourceCollection'
import { pythonResources } from '../../data/resourceManagement'

const PythonHome = () => {
  return (
    <ResourceCollection title="Python Basics" resources={pythonResources} />
  )
}

export default PythonHome
