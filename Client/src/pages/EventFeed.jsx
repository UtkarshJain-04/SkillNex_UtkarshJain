import useAuthStore from "../store/useAuthStore"
import { useEffect, useState } from "react"
import EventCard from "../components/eventCard"
import {Link} from 'react-router-dom'

const EventFeed = () => {
const {token} =useAuthStore();
const[loading,setLoading]= useState(false) 
const[events,setEvents]=useState([])
 useEffect(()=>{
        const fetchEvents = async()=>{
           try {
              setLoading(true)
            console.log("Event feed Token before api call:", token)
             const response = await fetch('http://localhost:5001/api/event/eventfeed',{
              headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
              }
             })
             const result = await response.json()
             if (!response.ok) {
              throw new Error(result.message);
             }
             console.log(result?.userData?.user)
              console.log(result?.userData?.token)
             console.log("Token before error line", token)
            //  login(result?.userData?.user, result?.userData?.token);
             setEvents(result.myEventFeed)
           
           } catch (err) {
            console.log("error while fetching all events", err);
           } finally {
            setLoading(false)
           }
        }
       fetchEvents()
    },[])

  return (
  <>
    {loading ? "Loading...." : 
    <div className="flex flex-col gap-0.5">
      <div className="flex justify-end mt-5 mr-5">
        <button className="btn bg-blue-400 text-white font-semibold text-lg"><Link to="/create-event">Add Event +</Link></button>
      </div>
      <div className="flex flex-wrap gap-4">
    {events?.map((event)=>(
        <EventCard  event = {event}/>
            ))}
  </div>
    </div>
    }

  

</>

  )
}

export default EventFeed