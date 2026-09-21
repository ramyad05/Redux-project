import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos} from '../api/mediaApi'
import { setQuery,setLoading,setError,setResults, setActiveTabs } from '../redux/features/searchSlice'
import { useEffect } from 'react'


const ResultGrid = () => {
    const {query,activeTab,results,loading,error} = useSelector((store)=>store.search)

    
   const getData = async ()=>{
    let data
        if(activeTab == 'photos'){
             data = await fetchPhotos(query)
        }
        if(activeTab == 'videos'){
             data = await fetchVideos(query)
        }
   }

   useEffect(function(){
    getData()
   },[query])
  return (
    <div>
      <button onClick={}>Get Data</button>
    </div>
  )
}

export default ResultGrid
