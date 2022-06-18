import React from 'react'
import ResourceCollection from '../../components/ResourceCollection'
import { sqlResources } from '../../data/resourceManagement'

const SqlHome = () => {
  return (
    <ResourceCollection title="SQL Basics" resources={sqlResources} />
  )
}

export default SqlHome
