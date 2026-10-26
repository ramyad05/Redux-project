import { useDispatch } from "react-redux"
import { addedToast } from "../redux/features/collectionSlice"




const ResultCard = ({item}) => {
  const dispatch = useDispatch()

  const addToCollection = (item) => {
   dispatch(addToCollection(item))
   dispatch(addedToast())
  }
}

export default ResultCard
