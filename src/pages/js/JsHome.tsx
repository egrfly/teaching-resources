import ResourceCollection from '../../components/ResourceCollection'
import { jsResources } from '../../data/resourceManagement'

const JsHome = () => {
  return (
    <ResourceCollection title="JS Basics" resources={jsResources} />
  )
}

export default JsHome
