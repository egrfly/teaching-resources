import ResourceCollection from '../components/ResourceCollection'
import { homeResources } from '../data/resourceManagement'

const Home = () => {
  return (
    <ResourceCollection title="Home" resources={homeResources} />
  )
}

export default Home
