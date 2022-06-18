import React from 'react'
import md5 from 'crypto-js/md5'
import Resource from '../models/Resource'
import NavBar from './NavBar'
import ResourceCard from './ResourceCard'

interface ResourceCollectionProps {
  title: string,
  resources: Resource[],
}

const ResourceCollection = ({title, resources}: ResourceCollectionProps) => {
  return (
    <>
      <NavBar pageTitle={title} />
      <main className="py-4">
        <div className="container text-light">
          <h1 className="display-4">{resources.length} resources</h1>
          {resources.map(resource => <ResourceCard title={resource.title} description={resource.description} url={resource.url} key={md5(resource.title).toString()} />)}
        </div>
      </main>
    </>
  )
}

export default ResourceCollection
