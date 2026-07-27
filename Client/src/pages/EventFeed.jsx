import useAuthStore from "../store/useAuthStore"
import { useEffect, useState } from "react"
import EventCard from "../components/eventCard"

const EventFeed = () => {
const {login,token} =useAuthStore();
const[loading,setLoading]= useState(true) 
const[events,setEvents]=useState([])
 useEffect(()=>{
        const fetchEvents = async()=>{
           try {
              setLoading(true)
            console.log("Token:", token)
           
             const response = await fetch('http://localhost:5001/api/event/eventfeed',{
              method:'GET',
              headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
              }
             })
             
             const result = await response.json()
             if (!response.ok) {
              throw new Error(result.message);
             }login(result?.userData?.user, result?.userData?.token);
             setEvents(result.myEventFeed)
           
           } catch (err) {
            console.log("error while fetching all events", err);
           } finally {
            setLoading(false)
           }
        }
       fetchEvents()
    },[token,login])






  return (
  <>
    <div>EventFeed hai ye </div>

  <div className="flex flex-wrap gap-4">
    {events?.map((event)=>(
                  <EventCard  event = {event}/>
            ))}
  </div>

</>

  )
}

export default EventFeed