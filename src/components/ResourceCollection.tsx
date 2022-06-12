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
          {resources.map(resource => <ResourceCard title={resource.title} description={resource.description} url={resource.url} />)}
        </div>
      </main>
    </>
  )
}

export default ResourceCollection
