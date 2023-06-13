import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../slices/navSlice';


const WatchVideo = () => {
const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeSidebar())        
    },[])

  return (
    <div>WatchVideo</div>
  )
}

export default WatchVideo