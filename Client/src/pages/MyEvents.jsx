import useAuthStore from "../store/useAuthStore"
import { useEffect, useState } from "react"
import EventCard from "../components/eventCard"
import {Link} from 'react-router-dom'
import { API_URL } from '../config'

const MyEvents = () => {
const {token} =useAuthStore();
const[loading,setLoading]= useState(false) 
const[myEvents,setMyEvents]=useState([])
 useEffect(()=>{
        const fetchMyEvents = async()=>{
           try {
              setLoading(true)
             const response = await fetch(`${API_URL}/api/event/myevents`,{
              headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
              }
             })
             const result = await response.json()
             if (!response.ok) {
              throw new Error(result.message);
             }
             setMyEvents(result.myEvents)
           } catch (err) {
            console.log("Error while fetching your events", err);
           } finally {
            setLoading(false)
           }
        }
       fetchMyEvents()
    },[])

  return (
  <>
    {loading ? "Loading...." : 
    <div className="flex flex-col">
      <div className="flex justify-start mt-5 ml-5">
      <button className="btn bg-purple-400 text-white font-semibold text-lg rounded-xl"><Link to="/eventfeed">🢀 Back</Link></button>      </div>
      <div className="flex flex-wrap gap-4">
    {myEvents?.map((event)=>(
        <EventCard event = {event}/>))}
  </div>
    </div>
    }
</>
  )
}

export default MyEvents
