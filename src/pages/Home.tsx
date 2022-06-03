import NavBar from '../components/NavBar'
import ResourceCard from '../components/ResourceCard'
import { homeResources } from '../data/resourceManagement'

const Home = () => {
  return (
    <>
      <NavBar pageTitle="Home" />
      <main className="py-4">
        <div className="container text-light">
          <h1 className="display-4">{homeResources.length} resources</h1>
          {homeResources.map(resource => <ResourceCard title={resource.title} description={resource.description} url={resource.url} />)}
        </div>
      </main>
    </>
  )
}

export default Home
