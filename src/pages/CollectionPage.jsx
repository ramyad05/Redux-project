import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"


const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)
  return (
    <div>
      {collection.map((item) =>{
        return <div key={idx}>
          <CollectionCard item={item} />
        </div>

      })}
    </div>
  )
}

export default CollectionPage
