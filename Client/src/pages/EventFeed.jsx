import useAuthStore from "../store/useAuthStore"
import { useEffect, useState } from "react"
import EventCard from "../components/eventCard"
import {Link} from 'react-router-dom'

const EventFeed = () => {
const {token} =useAuthStore();
const [loading,setLoading]= useState(false) 
const [events,setEvents] = useState([])
const [recommendedEvents, setRecommendedEvents] = useState([])
const [showAiRecommendations, setShowAiRecommendations] = useState(false);
  const handleEventAi = async()=>{
      try {
        const response = await fetch('http://localhost:5001/api/event-ai/analyze',{
        headers:{'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`},
        method: "POST"
        })
      const result = await response.json()
      if(!response.ok){
        throw new Error(result.message)
      }
      setRecommendedEvents(result.eventAiResult)
      setShowAiRecommendations(true)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
  }
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
    {loading ? (
      "Loading..."
    ) : (
      <div className="flex flex-col gap-4">

        {/* Top Bar */}
        <div className="flex justify-between items-center m-5">

          <div className="flex items-center gap-4">
            {showAiRecommendations && (
              <h2 className="text-2xl font-bold text-emerald-600">
                AI Recommended Events
              </h2>
            )}

            <button
              className="btn bg-emerald-400 text-white font-semibold text-lg rounded-xl"
              onClick={() => {
                if (showAiRecommendations) {
                  setShowAiRecommendations(false);
                } else {
                  handleEventAi();
                }
              }}
            >
              {showAiRecommendations
                ? "Show All Events"
                : "Recommend"}
            </button>
          </div>

          <div className="flex gap-3">
            <Link
              to="/create-event"
              className="btn bg-blue-400 text-white font-semibold text-lg rounded-xl"
            >
              Add Event +
            </Link>

            <Link
              to="/myevents"
              className="btn bg-orange-400 text-white font-semibold text-lg rounded-xl"
            >
              My Events
            </Link>
          </div>

        </div>

        {/* Event Cards */}
        <div className="flex flex-wrap gap-4">
          {(showAiRecommendations ? recommendedEvents : events).map((event) => (
            <EventCard
              key={event._id || event.title || event.Title}
              event={event}
            />
          ))}
        </div>

      </div>
    )}
  </>
);
}

export default EventFeed