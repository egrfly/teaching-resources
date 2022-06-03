import NavBar from '../../components/NavBar'
import ResourceCard from '../../components/ResourceCard'
import { jsResources } from '../../data/resourceManagement'

const JsIndex = () => {
  return (
    <>
      <NavBar pageTitle="SQL Basics" />
      <main className="py-4">
        <div className="container text-light">
          <h1 className="display-4">{jsResources.length} resources</h1>
          {jsResources.map(resource => <ResourceCard title={resource.title} description={resource.description} url={resource.url} />)}
        </div>
      </main>
    </>
  )
}

export default JsIndex
