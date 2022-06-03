import NavBar from '../../components/NavBar'
import ResourceCard from '../../components/ResourceCard'
import { sqlResources } from '../../data/resourceManagement'

const SqlIndex = () => {
  return (
    <>
      <NavBar pageTitle="SQL Basics" />
      <main className="py-4">
        <div className="container text-light">
          <h1 className="display-4">{sqlResources.length} resources</h1>
          {sqlResources.map(resource => <ResourceCard title={resource.title} description={resource.description} url={resource.url} />)}
        </div>
      </main>
    </>
  )
}

export default SqlIndex
