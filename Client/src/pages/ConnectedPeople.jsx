import { useState } from "react"
import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore.js"
import {Link} from 'react-router-dom'
import PeopleCard from "../components/peopleCard.jsx"

const ConnectedPeople = () => {
    const {token, user} = useAuthStore()
    const [loading, setLoading] = useState(false)
    const [connected, setConnected] = useState([])
    useEffect(()=>{
        const fetchConnected= async()=>{
            try {
                setLoading(true)
                const response = await fetch("http://localhost:5001/api/connection/accepted",{
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
                const result = await response.json()
                if(!response.ok){
                    throw new Error(result.message)
                }
                console.log(result?.myAcceptedConnections)
                setConnected(result?.myAcceptedConnections)
            } catch (error) {
                console.log("Error:", error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchConnected()
    },[])
    
  return (
    <>
    {loading ? "Loading...." : 
    <div className="flex flex-col gap-2">
        <div className="flex justify-start mt-5 ml-5 gap-3">
                <button className="btn bg-cyan-400 text-white font-semibold text-lg rounded-xl"><Link to="/connection-feed">🢀 Back</Link></button>
              </div>
        <div className="flex flex-wrap gap-3 justify-center">
    {connected.map((people) => {
    const otherUser =
        String(people.sender._id) === String(user._id)
            ? people.receiver
            : people.sender
    return (<PeopleCard user={otherUser}/>)
})}
    </div>
        </div>}
    </>
  )
}

export default ConnectedPeople